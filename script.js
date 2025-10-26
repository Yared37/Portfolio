// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize the application
    initializeApp();
});

// Application state
let currentCategory = 'AI';
let hoveredExp = null;

// Company logos mapping
const companyLogos = {
    'Information Network Security Administration (INSA)': 'images/INSA.png',
    'Addis Ababa University': 'images/AAU.png',
    'Ministry of Agriculture Ethiopia': 'images/ministry-of-agriculturE.webp',
    'Global Diplomacy Club, Safari Academy': 'images/SAFARI.png',
    'Wolayita STEM Program': 'https://via.placeholder.com/40x40/f59e0b/ffffff?text=WSP',
    'Weyra Trading': 'https://via.placeholder.com/40x40/ef4444/ffffff?text=WT',
    'Track and Field Team, Safari Academy': 'images/SAFARI.png',
    'Ethiopian Orthodox Church': 'https://via.placeholder.com/40x40/6366f1/ffffff?text=EOC'
};

// Experience data with company logos
const experienceData = {
    'AI': [
        {
            title: 'UEBA System Developer',
            organization: 'Information Network Security Administration (INSA)',
            period: '2025 – Present',
            highlights: [
                'Selected as 1 of 200 from over 6,000 applicants for Ethiopia\'s most competitive national tech camp',
                'Developed AI-based User and Entity Behavior Analytics system analyzing millions of events per second',
                'Reduced false positives by 40% through advanced algorithm design',
                'Created NLP model for Amharic text processing'
            ]
        },
        {
            title: 'NLP Research Assistant',
            organization: 'Addis Ababa University',
            period: '2024 – Present',
            highlights: [
                'Developed NLP models for Amharic and Ethiopian languages',
                'Optimized tokenization and embedding methods for low-resource languages',
                'Presented AI innovations at Ethiopian Tech Expo (Africa\'s largest tech expo)'
            ]
        },
        {
            title: 'Higgs Boson Research Assistant',
            organization: 'Addis Ababa University',
            period: '2024 – Present',
            highlights: [
                'Collaborated on ML models for Higgs boson decay pattern analysis',
                'Processed high-energy particle collision datasets',
                'Built Python ML pipelines for data analysis and visualization'
            ]
        },
        {
            title: 'National Agricultural Census Contributor',
            organization: 'Ministry of Agriculture Ethiopia',
            period: '2023 – 2024',
            highlights: [
                'Designed software tools for data collection from 400,000 households',
                'Trained field enumerators on digital data collection',
                'Developed automatic data cleaning and analysis scripts'
            ]
        }
    ],
    'Entrepreneurship': [
        {
            title: 'Founder & President',
            organization: 'Global Diplomacy Club, Safari Academy',
            period: '2022 – Present',
            highlights: [
                'Founded student-led club inspired by Model United Nations',
                'Organized workshops and inter-school competitions',
                'Represented Congo at Youth Model United Nations at African Union',
                'Won first place at Addis Ababa Debate Championship'
            ]
        },
        {
            title: 'STEM Educator (Volunteer)',
            organization: 'Wolayita STEM Program',
            period: '2023 – 2024',
            highlights: [
                'Taught science and technology to over 100 children',
                'Led hands-on robotics projects and activities',
                'Received Certificate of Appreciation from regional government'
            ]
        },
        {
            title: 'Intern',
            organization: 'Weyra Trading',
            period: 'Summer 2023',
            highlights: [
                'Led projects for international trading company',
                'Designed strategies for operational efficiency',
                'Named "Best Intern of the Summer" as first high school intern'
            ]
        }
    ],
    'Sport': [
        {
            title: 'Team Captain',
            organization: 'Track and Field Team, Safari Academy',
            period: 'Present',
            highlights: [
                'Led training sessions improving team race times by 15%',
                'Trains daily at 6 a.m. with Olympic-level athletes',
                'Competed in Sofi Malt Great Ethiopian Run International 10KM',
                'Mentored peers on technique, conditioning, and teamwork'
            ]
        }
    ],
    'Creative': [
        {
            title: 'Scholar and Musician',
            organization: 'Ethiopian Orthodox Church',
            period: 'Multi-year',
            highlights: [
                'Completed traditional Ethiopian Orthodox scholarly training',
                'Mastered Ge\'ez language and ancient rhetoric',
                'Composed complex allegorical poetry on-the-spot',
                'Mastered the Begena (10-string lyre) and liturgical chant',
                'Performed professional-level liturgical music with traditional movements'
            ]
        }
    ]
};

// Project data with placeholder images
const projectData = {
    1: {
        title: 'Amharic NLP Model',
        description: 'Developed an advanced NLP model for Amharic language processing with optimized tokenization and embeddings.',
        tags: ['NLP', 'Python', 'TensorFlow'],
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
        fullContent: `# Amharic NLP Model

## Overview
This project focuses on developing natural language processing capabilities for Amharic, one of Ethiopia's most widely spoken languages. The challenge was creating effective tokenization and embedding methods for a low-resource language.

## Technical Approach
- Built custom tokenizers optimized for Amharic morphology
- Implemented word embeddings using FastText and BERT-based models
- Trained on local text corpora with over 1M sentences
- Evaluated using precision, recall, and F1 metrics

## Results
The model achieved 87% accuracy on classification tasks and significantly outperformed baseline models. This work was presented at the Ethiopian Tech Expo and is being integrated into INSA's security systems.

## Impact
This research enables better text analysis for Amharic content and opens doors for more Ethiopian language AI applications.`
    },
    2: {
        title: 'UEBA Security System',
        description: 'AI-based User and Entity Behavior Analytics system processing millions of network events for national security.',
        tags: ['AI', 'Security', 'Real-time Processing'],
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
        fullContent: `# UEBA Security System

## Project Background
Selected as one of 200 students from 6,000+ applicants to develop Ethiopia's next-generation cybersecurity infrastructure at INSA.

## System Architecture
- Real-time event processing pipeline handling millions of events/second
- Machine learning models for anomaly detection
- Integration with national network infrastructure
- Dashboard for security analysts

## Key Achievements
- Reduced false positive rate by 40%
- Implemented adversarial resilience testing
- Handles noisy and incomplete data effectively
- Optimized for large-scale deployment

## Technologies
C++, Python, TensorFlow, distributed systems, real-time processing frameworks.`
    },
    3: {
        title: 'Agricultural Census Platform',
        description: 'Designed data collection tools for Ethiopia\'s national agricultural census covering 400,000 households.',
        tags: ['Full-stack', 'Data Engineering', 'Impact'],
        image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
        fullContent: `# National Agricultural Census Platform

## Mission
Support Ethiopia's Ministry of Agriculture in collecting comprehensive agricultural data from 400,000 rural households across the country.

## Technical Implementation
- Built offline-first data collection mobile apps
- Designed automatic data validation and cleaning pipelines
- Created training materials for 1,000+ field enumerators
- Implemented sync mechanisms for low-connectivity environments

## Challenges Solved
- Handling manual entry errors with smart validation
- Working in areas with limited or no internet connectivity
- Processing and aggregating data from diverse sources
- Training non-technical users on digital tools

## Outcome
Successfully contributed to national policy decisions with accurate, timely agricultural data.`
    }
};

// Blog data with 5 blog posts
const blogData = {
    1: {
        title: 'Building NLP Models for Low-Resource Languages',
        excerpt: 'Lessons learned from developing Amharic language models and the unique challenges of working with Ethiopian languages.',
        date: '2024-12-15',
        readTime: '8 min read',
        tags: ['NLP', 'AI', 'Research'],
        content: `# Building NLP Models for Low-Resource Languages

## The Challenge
Most NLP research focuses on high-resource languages like English, leaving languages like Amharic with limited tools and datasets.

## Our Approach
We started by collecting and cleaning Amharic text corpora from various sources. The key was understanding the language's unique morphology and script.

### Technical Details
- Custom tokenization for Amharic script
- Transfer learning from multilingual models
- Data augmentation techniques
- Evaluation on domain-specific tasks

## Results
Our models achieve competitive performance and demonstrate that with careful design, low-resource languages can benefit from modern NLP techniques.

## Future Work
We're expanding to other Ethiopian languages including Oromo, Tigrinya, and Somali.`
    },
    2: {
        title: 'From Begena to Binary: Why Classical Training Matters',
        excerpt: 'How my Ethiopian Orthodox training in rhetoric, music, and ancient texts shapes how I approach modern problems.',
        date: '2024-11-20',
        readTime: '6 min read',
        tags: ['Personal', 'Learning', 'Culture'],
        content: `# From Begena to Binary: Why Classical Training Matters

## Two Worlds, One Approach
People are often surprised when they learn I trained in Ethiopian Orthodox scholarship while building AI systems. But these disciplines share more than you'd think.

## The Art of Deep Focus
Orthodox training requires memorizing thousands of lines of liturgy, mastering Ge'ez, and engaging in complex theological debates. This taught me patience and deep concentration—essential for debugging complex systems.

## Pattern Recognition
Composing allegorical poetry on-the-spot requires recognizing patterns in language, theology, and rhetoric. This same skill helps me identify patterns in data and code.

## Discipline and Consistency
Training at 6 a.m. daily—whether for track practice or Orthodox studies—builds the discipline needed for research and development.

## The Lesson
Don't underestimate how "non-technical" training can enhance technical work. The best problem solvers draw from diverse experiences.`
    },
    3: {
        title: 'AI for Social Good: Real-World Impact in Ethiopia',
        excerpt: 'Reflections on using AI to solve real problems—from agriculture to security—in a developing country context.',
        date: '2024-10-10',
        readTime: '10 min read',
        tags: ['AI', 'Impact', 'Development'],
        content: `# AI for Social Good: Real-World Impact in Ethiopia

## Beyond the Hype
AI gets a lot of attention for flashy demos, but the real test is whether it solves actual problems for real people.

## Agricultural Data Collection
Working on Ethiopia's agricultural census, we faced challenges that don't exist in Silicon Valley: no internet, low literacy, diverse languages, and limited device access.

Our solution had to work offline, be intuitive for first-time smartphone users, and handle inconsistent data. This forced us to think beyond the typical tech stack.

## Security Systems That Scale
At INSA, we're not building demos—we're protecting national infrastructure. The stakes are high, and the scale is massive.

## Key Learnings
1. **Context Matters**: Solutions need to fit local realities
2. **Simple > Complex**: The best solution is often the simplest one that works
3. **Involve Users Early**: Field workers know more than engineers about real constraints
4. **Impact > Innovation**: It's better to deploy something useful than invent something novel

## Looking Forward
There's enormous potential for AI in Africa, but it requires understanding local contexts, languages, and needs.`
    },
    4: {
        title: 'The Future of Ethiopian Tech: Building Local Solutions',
        excerpt: 'Exploring how Ethiopian developers can create technology solutions that address local challenges and opportunities.',
        date: '2024-09-05',
        readTime: '7 min read',
        tags: ['Technology', 'Innovation', 'Ethiopia'],
        content: `# The Future of Ethiopian Tech: Building Local Solutions

## The Opportunity
Ethiopia has a growing tech scene, but most solutions are imported from abroad. There's enormous potential for locally-developed technology that addresses Ethiopian challenges.

## Local Context Matters
Working on the agricultural census taught me that solutions need to fit local realities. What works in Silicon Valley might not work in rural Ethiopia.

## Key Areas for Innovation
- **Agriculture**: Smart farming solutions for Ethiopian crops and climate
- **Language**: NLP tools for Amharic, Oromo, and other local languages
- **Education**: Digital learning platforms adapted for Ethiopian curriculum
- **Healthcare**: Telemedicine solutions for remote areas

## Building the Ecosystem
We need more collaboration between universities, government, and private sector to create a thriving tech ecosystem.

## The Vision
A future where Ethiopian developers create world-class solutions that serve both local and global markets.`
    },
    5: {
        title: 'Balancing Athletics and Academics: Lessons from Track Training',
        excerpt: 'How daily 6 AM training sessions with Olympic-level athletes taught me discipline, focus, and the importance of consistent effort.',
        date: '2024-08-15',
        readTime: '5 min read',
        tags: ['Sports', 'Discipline', 'Personal'],
        content: `# Balancing Athletics and Academics: Lessons from Track Training

## The 6 AM Routine
Every morning at 6 AM, I train with Olympic-level athletes. This isn't just about running—it's about building discipline that translates to every area of life.

## Lessons from the Track
- **Consistency Over Intensity**: Small daily improvements compound over time
- **Mental Toughness**: Pushing through discomfort builds resilience
- **Team Leadership**: Leading by example and supporting teammates
- **Goal Setting**: Breaking big goals into daily actions

## Applying Track Lessons to Tech
The same principles that make a good runner apply to software development:
- Daily coding practice builds skills over time
- Debugging complex problems requires mental toughness
- Leading tech projects requires team management skills
- Breaking down large projects into manageable tasks

## The Balance
Balancing athletics and academics isn't about choosing one over the other—it's about using each to strengthen the other.

## The Result
The discipline from track training makes me a better student and developer. The problem-solving from coding makes me a better athlete.`
    }
};

// Initialize the application
function initializeApp() {
    setupCategoryNavigation();
    setupProjectCards();
    setupBlogCards();
    setupContactForm();
    setupModals();
    setupGallery();
    renderExperienceCards();
}

// Setup category navigation
function setupCategoryNavigation() {
    const categoryButtons = document.querySelectorAll('.filter-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            setActiveCategory(category);
        });
    });
}

// Set active category
function setActiveCategory(category) {
    currentCategory = category;
    
    // Update button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Update experience cards
    renderExperienceCards();
}

// Render experience cards with company logos
function renderExperienceCards() {
    const container = document.getElementById('experience-container');
    const experiences = experienceData[currentCategory] || [];
    
    container.innerHTML = experiences.map(exp => `
        <div class="experience-card">
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-start">
                    <img src="${companyLogos[exp.organization] || 'https://via.placeholder.com/40x40/6b7280/ffffff?text=LOGO'}" 
                         alt="${exp.organization}" 
                         class="company-logo">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-1">${exp.title}</h3>
                        <p class="text-lg text-gray-600 mb-1">${exp.organization}</p>
                        <p class="text-sm text-gray-500">${exp.period}</p>
                    </div>
                </div>
            </div>
            <ul class="space-y-2">
                ${exp.highlights.map(highlight => `
                    <li class="flex items-start gap-3 text-gray-700">
                        <i data-lucide="chevron-right" class="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400"></i>
                        <span>${highlight}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
    
    // Re-initialize icons
    lucide.createIcons();
}

// Setup project cards
function setupProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const readmoreBtn = card.querySelector('.readmore-btn');
        readmoreBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectId = parseInt(card.dataset.project);
            // Navigate to project detail page
            window.location.href = `project${projectId}.html`;
        });
    });
}

// Open project modal
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const image = document.querySelector('#modal-image img');
    const tags = document.getElementById('modal-tags');
    const content = document.getElementById('modal-content');
    
    title.textContent = project.title;
    image.src = project.image;
    image.alt = project.title;
    
    tags.innerHTML = project.tags.map(tag => `
        <span class="px-4 py-2 bg-cyan-100 text-cyan-700 text-sm font-medium">${tag}</span>
    `).join('');
    
    content.innerHTML = parseMarkdown(project.fullContent);
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Setup blog cards
function setupBlogCards() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        const readmoreBtn = card.querySelector('.readmore-btn');
        readmoreBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const blogId = parseInt(card.dataset.blog);
            // Navigate to blog detail page
            window.location.href = `blog${blogId}.html`;
        });
    });
}

// Open blog modal
function openBlogModal(blogId) {
    const blog = blogData[blogId];
    if (!blog) return;
    
    const modal = document.getElementById('blog-modal');
    const title = document.getElementById('blog-modal-title');
    const meta = document.getElementById('blog-modal-meta');
    const tags = document.getElementById('blog-modal-tags');
    const content = document.getElementById('blog-modal-content');
    
    title.textContent = blog.title;
    
    meta.innerHTML = `
        <span class="flex items-center gap-1">
            <i data-lucide="calendar" class="w-4 h-4"></i>
            ${new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <span>•</span>
        <span>${blog.readTime}</span>
    `;
    
    tags.innerHTML = blog.tags.map(tag => `
        <span class="px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-medium flex items-center gap-1">
            <i data-lucide="tag" class="w-3.5 h-3.5"></i>
            ${tag}
        </span>
    `).join('');
    
    content.innerHTML = parseMarkdown(blog.content);
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Parse markdown-like content
function parseMarkdown(content) {
    return content.split('\n').map(line => {
        if (line.startsWith('# ')) {
            return `<h1 class="text-3xl font-bold text-gray-900 mb-4">${line.substring(2)}</h1>`;
        } else if (line.startsWith('## ')) {
            return `<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">${line.substring(3)}</h2>`;
        } else if (line.startsWith('### ')) {
            return `<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">${line.substring(4)}</h3>`;
        } else if (line.startsWith('- ')) {
            return `<li class="text-gray-700 ml-6">${line.substring(2)}</li>`;
        } else if (line.match(/^\d+\./)) {
            return `<li class="text-gray-700 ml-6">${line.substring(line.indexOf('.') + 2)}</li>`;
        } else if (line.trim() === '') {
            return '<br>';
        } else {
            return `<p class="text-gray-700 leading-relaxed mb-4">${line}</p>`;
        }
    }).join('');
}

// Setup modals
function setupModals() {
    // Project modal
    const projectModal = document.getElementById('project-modal');
    const closeProjectModal = document.getElementById('close-project-modal');
    
    closeProjectModal.addEventListener('click', () => {
        projectModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });
    
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Blog modal
    const blogModal = document.getElementById('blog-modal');
    const closeBlogModal = document.getElementById('close-blog-modal');
    
    closeBlogModal.addEventListener('click', () => {
        blogModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });
    
    blogModal.addEventListener('click', (e) => {
        if (e.target === blogModal) {
            blogModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}

// Setup contact form
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! (This is a placeholder - form submission not implemented)');
        form.reset();
    });
}

// Add smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add scroll animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    });
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize scroll animations
addScrollAnimations();

// Setup photo gallery
function setupGallery() {
    const galleryImages = [
        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600'
    ];
    
    let currentImageIndex = 0;
    const galleryImage = document.getElementById('gallery-image');
    const galleryCounter = document.getElementById('gallery-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (!galleryImage || !galleryCounter || !prevBtn || !nextBtn) return;
    
    function updateGallery() {
        galleryImage.src = galleryImages[currentImageIndex];
        galleryCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    }
    
    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateGallery();
    });
    
    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateGallery();
    });
    
    // Initialize gallery
    updateGallery();
}

// Add keyboard navigation for modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const projectModal = document.getElementById('project-modal');
        const blogModal = document.getElementById('blog-modal');
        
        if (!projectModal.classList.contains('hidden')) {
            projectModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        } else if (!blogModal.classList.contains('hidden')) {
            blogModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }
});
