/**
 * Main JavaScript for Labiofun Website
 * Interactive functionality and modern enhancements
 */

// ============================================================================
// Scroll Progress Indicator
// ============================================================================
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;

    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    scrollProgress.style.width = scrolled + '%';
    scrollProgress.setAttribute('aria-valuenow', Math.round(scrolled));
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('load', updateScrollProgress);

// ============================================================================
// Smooth Scroll Navigation
// ============================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for # links (modal triggers, etc.)
        if (href === '#' || !href.startsWith('#')) return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================================================
// Scroll Animations with Intersection Observer
// ============================================================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Stop observing once animated
            animateOnScroll.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all scroll-animate elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale').forEach(el => {
        animateOnScroll.observe(el);
    });
});

// ============================================================================
// Team Tabs Functionality
// ============================================================================
function initTeamTabs() {
    // Only select tab buttons within the team section
    const teamSection = document.getElementById('team');
    if (!teamSection) return;

    const tabButtons = teamSection.querySelectorAll('.tab-btn');
    const tabContents = teamSection.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all team buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ============================================================================
// Collaborators Functionality
// ============================================================================
function getLastName(fullName) {
    const names = fullName.split(' ');
    return names[names.length - 1].toLowerCase();
}

function renderCollaborators(collabList, containerId = 'teamContainer') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    if (collabList.length === 0) {
        container.innerHTML = '<p class="no-results" data-i18n="team.no.results">Nenhum colaborador encontrado</p>';
        return;
    }

    collabList.forEach(collab => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'team-member scroll-animate';

        memberDiv.innerHTML = `
      <div class="member-header">
        <h3>${collab.name}</h3>
        <p>${collab.institution}</p>
      </div>
      <div class="member-content">
        <p>${collab.description}</p>
        <div class="member-links">
          ${collab.links.map(link =>
            `<a href="${link.url}" title="${link.title}" target="_blank" rel="noopener noreferrer"><i class="${link.icon}"></i></a>`
        ).join('')}
        </div>
      </div>
    `;

        container.appendChild(memberDiv);

        // Observe for scroll animation
        if (animateOnScroll) {
            animateOnScroll.observe(memberDiv);
        }
    });
}

function sortCollaborators(collaborators, containerId = 'teamContainer') {
    const sorted = [...collaborators].sort((a, b) => {
        const lastNameA = getLastName(a.name);
        const lastNameB = getLastName(b.name);
        return lastNameA.localeCompare(lastNameB);
    });

    renderCollaborators(sorted, containerId);
}

function searchCollaborators(collaborators, searchTerm, containerId = 'teamContainer') {
    if (!searchTerm) {
        renderCollaborators(collaborators, containerId);
        return;
    }

    const filtered = collaborators.filter(collab =>
        collab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        collab.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        collab.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    renderCollaborators(filtered, containerId);
}

// ============================================================================
// Publications Functionality
// ============================================================================
function formatCitationABNT(publication) {
    let authors = publication.authors.split(', ');
    let formattedAuthors = authors.length > 3 ? `${authors[0]} et al.` : authors.join('; ');

    const journalParts = publication.journal.split(', ');
    const journalName = journalParts[0];
    const year = journalParts[1] || publication.year;
    const volume = journalParts[2] || '';
    const number = journalParts[3] || '';
    const pages = journalParts[4] || '';

    return `${formattedAuthors}. ${publication.title}. ${journalName}, ${year}, v. ${volume}, n. ${number}, p. ${pages}. DOI: ${publication.doi}.`;
}

function formatCitationAPA(publication) {
    let authors = publication.authors.split(', ');
    let formattedAuthors = '';

    if (authors.length === 1) {
        formattedAuthors = authors[0];
    } else if (authors.length === 2) {
        formattedAuthors = `${authors[0]} & ${authors[1]}`;
    } else if (authors.length > 7) {
        formattedAuthors = authors.slice(0, 6).join(', ') + '... ' + authors[authors.length - 1];
    } else {
        const lastAuthor = authors.pop();
        formattedAuthors = authors.join(', ') + ' & ' + lastAuthor;
    }

    const journalParts = publication.journal.split(', ');
    const journalName = journalParts[0];
    const year = journalParts[1] || publication.year;
    const volume = journalParts[2] || '';
    const number = journalParts[3] || '';
    const pages = journalParts[4] || '';

    return `${formattedAuthors} (${year}). ${publication.title}. ${journalName}, ${volume}(${number}), ${pages}. https://doi.org/${publication.doi}`;
}

function formatCitationBibTeX(publication) {
    const firstAuthor = publication.authors.split(', ')[0].toLowerCase().replace(/\s+/g, '');
    const key = `${firstAuthor}${publication.year}`;

    const journalParts = publication.journal.split(', ');
    const journalName = journalParts[0];
    const volume = journalParts[2] || '';
    const number = journalParts[3] || '';
    const pages = journalParts[4] || '';
    const authors = publication.authors.split(', ').join(' and ');

    return `@article{${key},
  author = {${authors}},
  title = {${publication.title}},
  journal = {${journalName}},
  year = {${publication.year}},
  volume = {${volume}},
  number = {${number}},
  pages = {${pages}},
  doi = {${publication.doi}}
}`;
}

let currentCitationFormat = 'abnt';

function showCitationModal(publication) {
    const modal = document.getElementById('citation-modal');
    if (!modal) return;

    const citationTextABNT = document.getElementById('citation-text-abnt');
    const citationTextAPA = document.getElementById('citation-text-apa');
    const citationTextBibTeX = document.getElementById('citation-text-bibtex');

    if (citationTextABNT) citationTextABNT.textContent = formatCitationABNT(publication);
    if (citationTextAPA) citationTextAPA.textContent = formatCitationAPA(publication);
    if (citationTextBibTeX) citationTextBibTeX.textContent = formatCitationBibTeX(publication);

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    currentCitationFormat = 'abnt';
}

function closeCitationModal() {
    const modal = document.getElementById('citation-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
}

function copyCitation() {
    const activeCitation = document.querySelector('.citation-text.active');
    if (!activeCitation) return;

    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = activeCitation.textContent;
    tempTextarea.style.position = 'fixed';
    tempTextarea.style.opacity = '0';
    document.body.appendChild(tempTextarea);
    tempTextarea.select();

    try {
        document.execCommand('copy');
        const copyCitationBtn = document.getElementById('citation-copy');
        if (copyCitationBtn) {
            const originalText = copyCitationBtn.textContent;
            copyCitationBtn.textContent = 'Copiado!';
            setTimeout(() => {
                copyCitationBtn.textContent = originalText;
            }, 2000);
        }
    } catch (err) {
        console.error('Failed to copy citation:', err);
    }

    document.body.removeChild(tempTextarea);
}

function initCitationModal() {
    // Citation tab functionality
    document.querySelectorAll('.citation-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.citation-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.citation-text').forEach(t => t.classList.remove('active'));

            this.classList.add('active');
            const format = this.getAttribute('data-format');
            const textElement = document.getElementById(`citation-text-${format}`);
            if (textElement) {
                textElement.classList.add('active');
            }
            currentCitationFormat = format;
        });
    });

    // Close button
    const closeBtn = document.querySelector('.citation-modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCitationModal);
    }

    // Copy button
    const copyBtn = document.getElementById('citation-copy');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyCitation);
    }

    // Close button in actions
    const closeActionBtn = document.getElementById('citation-close');
    if (closeActionBtn) {
        closeActionBtn.addEventListener('click', closeCitationModal);
    }

    // Close on outside click
    const modal = document.getElementById('citation-modal');
    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeCitationModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeCitationModal();
        }
    });
}

// ============================================================================
// Publications Rendering
// ============================================================================
function renderPublications(pubs) {
    try {
        const container = document.querySelector('.publications-container');
        if (!container) {
            console.error('renderPublications: Container não encontrado');
            return;
        }

        container.innerHTML = '';

        if (!pubs || pubs.length === 0) {
            container.innerHTML = '<p class="no-results" data-i18n="publications.no.results">Nenhuma publicação encontrada.</p>';
            return;
        }

        // Group by year
        const pubsByYear = pubs.reduce((acc, pub) => {
            if (!acc[pub.year]) acc[pub.year] = [];
            acc[pub.year].push(pub);
            return acc;
        }, {});

        // Sort years descending
        const years = Object.keys(pubsByYear).sort((a, b) => b - a);

        years.forEach(year => {
            const yearHeader = document.createElement('div');
            yearHeader.className = 'year-header';
            yearHeader.textContent = `Publicações de ${year}`;
            yearHeader.setAttribute('data-year', year);
            container.appendChild(yearHeader);

            pubsByYear[year].forEach(pub => {
                const pubEl = document.createElement('div');
                pubEl.className = 'publication-item scroll-animate';

                // Clean up authors (remove duplicates)
                const authors = pub.authors
                    .replace('Frases, Susana; FRASES, S.', 'Frases, Susana')
                    .replace('FRASES, S.', 'Frases, Susana');

                pubEl.innerHTML = `
            <h3>${pub.title}</h3>
            <p class="authors">${authors}</p>
            <p class="journal">${pub.journal}</p>
            <div class="pub-actions">
                ${pub.doi ? `<a href="https://doi.org/${pub.doi}" target="_blank" class="pub-btn" aria-label="Ver DOI da publicação">DOI</a>` : ''}
                <button class="pub-btn cite-btn" data-title="${pub.title.replace(/"/g, '&quot;')}" data-authors="${authors.replace(/"/g, '&quot;')}" data-journal="${pub.journal.replace(/"/g, '&quot;')}" data-year="${pub.year}" data-doi="${pub.doi || ''}" aria-label="Citar esta publicação">Citar</button>
            </div>
        `;

                container.appendChild(pubEl);

                // Observe for scroll animation
                if (animateOnScroll) {
                    animateOnScroll.observe(pubEl);
                }
            });
        });

        // Add citation button listeners
        document.querySelectorAll('.cite-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const data = {
                    title: btn.getAttribute('data-title'),
                    authors: btn.getAttribute('data-authors'),
                    journal: btn.getAttribute('data-journal'),
                    year: btn.getAttribute('data-year'),
                    doi: btn.getAttribute('data-doi')
                };
                showCitationModal(data);
            });
        });
    } catch (error) {
        console.error('Error em renderPublications:', error);
    }
}

function filterPublications(publications, year) {
    // Update active button
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.textContent.trim();
        if (btnText === (year === 'all' ? 'Todas' : year.toString()) ||
            btnText === (year === 'all' ? 'All years' : year.toString())) {
            btn.classList.add('active');
        }
    });

    const filtered = year === 'all'
        ? publications
        : publications.filter(pub => pub.year === parseInt(year));

    renderPublications(filtered);
}

function initPublications(publications) {
    try {
        // Validate input
        if (!publications) {
            console.error('initPubl: Publications data é undefined');
            return;
        }

        if (!Array.isArray(publications)) {
            console.error('initPublications: Publications deve ser um array');
            return;
        }

        if (publications.length === 0) {
            console.warn('initPublications: Nenhuma publicação encontrada');
            return;
        }

        // Generate year filter buttons
        const uniqueYears = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
        const yearFilterContainer = document.getElementById('year-filter-container');

        if (yearFilterContainer) {
            yearFilterContainer.innerHTML = '';

            // Add "All" button
            const allButton = document.createElement('button');
            allButton.className = 'year-btn active';
            allButton.textContent = 'Todas';
            allButton.setAttribute('data-i18n', 'publications.filter.all');
            allButton.addEventListener('click', () => filterPublications(publications, 'all'));
            yearFilterContainer.appendChild(allButton);

            // Add year buttons
            uniqueYears.forEach(year => {
                const yearButton = document.createElement('button');
                yearButton.className = 'year-btn';
                yearButton.textContent = year;
                yearButton.addEventListener('click', () => filterPublications(publications, year));
                yearFilterContainer.appendChild(yearButton);
            });
        }

        // Initial render
        renderPublications(publications);

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', function () {
                try {
                    const term = this.value.toLowerCase();
                    const filtered = publications.filter(pub =>
                        pub.title.toLowerCase().includes(term) ||
                        pub.authors.toLowerCase().includes(term) ||
                        pub.journal.toLowerCase().includes(term) ||
                        (pub.doi && pub.doi.toLowerCase().includes(term))
                    );
                    renderPublications(filtered);
                } catch (error) {
                    console.error('Error filtrando publicações:', error);
                }
            });
        }
    } catch (error) {
        console.error('Error em initPublications:', error);
    }
}

// ============================================================================
// Scroll to Top Button
// ============================================================================
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-chevron-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-primary);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-lg);
    z-index: var(--z-fixed);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-xl);
  `;

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    document.body.appendChild(button);
}

// ============================================================================
// Lazy Loading Images
// ============================================================================
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================================================
// Books and Chapters Functionality
// ============================================================================
function renderBooks(books) {
    const container = document.querySelector('.books-container');
    if (!container) return;

    container.innerHTML = '';

    if (books.length === 0) {
        container.innerHTML = '<p class="no-results">Nenhum livro ou capítulo encontrado.</p>';
        return;
    }

    // Group by year
    const booksByYear = books.reduce((acc, book) => {
        if (!acc[book.year]) acc[book.year] = [];
        acc[book.year].push(book);
        return acc;
    }, {});

    // Sort years descending
    const years = Object.keys(booksByYear).sort((a, b) => b - a);

    years.forEach(year => {
        const yearHeader = document.createElement('div');
        yearHeader.className = 'year-header';
        yearHeader.textContent = `Livros e Capítulos de ${year}`;
        container.appendChild(yearHeader);

        booksByYear[year].forEach(book => {
            const bookEl = document.createElement('div');
            bookEl.className = 'publication-item scroll-animate';

            bookEl.innerHTML = `
        <h3>${book.title}</h3>
        <p class="authors">${book.authors}</p>
        ${book.journal ? `<p class="journal">${book.journal}</p>` : ''}
        ${book.isbn ? `<p class="doi">ISBN: ${book.isbn}</p>` : ''}
        ${book.doi ? `<p class="doi">DOI: ${book.doi}</p>` : ''}
        <div class="links">
          ${book.doi ? `<a href="https://doi.org/${book.doi}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Ver publicação</a>` : ''}
          <a href="#" class="cite-btn" data-pub='${JSON.stringify(book).replace(/'/g, "&apos;")}'>
            <i class="fas fa-quote-right"></i> Citar
          </a>
        </div>
      `;

            container.appendChild(bookEl);

            if (animateOnScroll) {
                animateOnScroll.observe(bookEl);
            }
        });
    });

    // Add cite button listeners
    document.querySelectorAll('.books-container .cite-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            try {
                const bookData = JSON.parse(this.getAttribute('data-pub').replace(/&apos;/g, "'"));
                showCitationModal(bookData);
            } catch (err) {
                console.error('Failed to parse book data:', err);
            }
        });
    });
}

function filterBooks(books, year) {
    const filtered = year === 'all'
        ? books
        : books.filter(book => book.year === parseInt(year));

    renderBooks(filtered);
}

function initBooks(books) {
    if (!books || books.length === 0) return;

    // Generate year filter buttons
    const uniqueYears = [...new Set(books.map(book => book.year))].sort((a, b) => b - a);
    const yearFilterContainer = document.getElementById('books-year-filter-container');

    if (yearFilterContainer) {
        yearFilterContainer.innerHTML = '';

        // Add "All" button
        const allButton = document.createElement('button');
        allButton.className = 'year-btn active';
        allButton.textContent = 'Todas';
        allButton.addEventListener('click', () => filterBooks(books, 'all'));
        yearFilterContainer.appendChild(allButton);

        // Add year buttons
        uniqueYears.forEach(year => {
            const yearButton = document.createElement('button');
            yearButton.className = 'year-btn';
            yearButton.textContent = year;
            yearButton.addEventListener('click', () => filterBooks(books, year));
            yearFilterContainer.appendChild(yearButton);
        });
    }

    // Initial render
    renderBooks(books);

    // Search functionality
    const searchInput = document.getElementById('books-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const term = this.value.toLowerCase();
            const filtered = books.filter(book =>
                book.title.toLowerCase().includes(term) ||
                book.authors.toLowerCase().includes(term) ||
                (book.journal && book.journal.toLowerCase().includes(term)) ||
                (book.isbn && book.isbn.toLowerCase().includes(term)) ||
                (book.doi && book.doi.toLowerCase().includes(term))
            );
            renderBooks(filtered);
        });
    }
}

function initPublicationTabs() {
    // Only select publication tab buttons within the publications section
    const publicationsSection = document.getElementById('publications-page');
    if (!publicationsSection) return;

    const tabButtons = publicationsSection.querySelectorAll('[data-pub-type]');
    const tabContents = publicationsSection.querySelectorAll('.pub-tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetType = button.getAttribute('data-pub-type');

            // Remove active class from all publication buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding content
            const targetContent = document.getElementById(`${targetType}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ============================================================================
// Initialize Everything
// ============================================================================
document.addEventListener('DOMContentLoaded', function () {
    // Initialize team tabs
    initTeamTabs();

    // Initialize publication tabs
    initPublicationTabs();

    // Initialize citation modal
    initCitationModal();

    // Create scroll to top button
    createScrollToTopButton();

    // Initialize lazy loading
    initLazyLoading();

    // Export functions to global scope for inline use
    window.sortCollaborators = sortCollaborators;
    window.searchCollaborators = searchCollaborators;
    window.initPublications = initPublications;
    window.renderPublications = renderPublications;
    window.filterPublications = filterPublications;
    window.initBooks = initBooks;
    window.renderBooks = renderBooks;
    window.filterBooks = filterBooks;
    window.showCitationModal = showCitationModal;
});

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initTeamTabs,
        initCitationModal,
        initPublications,
        renderPublications,
        filterPublications,
        initBooks,
        renderBooks,
        filterBooks,
        initPublicationTabs,
        sortCollaborators,
        searchCollaborators,
        showCitationModal,
        closeCitationModal
    };
}
