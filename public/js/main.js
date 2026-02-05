// Forge and Flight Academy - Main JavaScript
// Mobile menu, analytics tracking, download tracking

// Mobile Menu Toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const navMenu = document.getElementById('navMenu');
  const toggle = document.querySelector('.mobile-menu-toggle');
  
  if (navMenu && toggle) {
    if (!navMenu.contains(event.target) && !toggle.contains(event.target)) {
      navMenu.classList.remove('active');
    }
  }
});

// Analytics Event Tracking
// This function is called from onclick handlers in HTML
function trackEvent(eventName, eventParams) {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventParams);
  }
  
  // Console log for debugging
  console.log('Event tracked:', eventName, eventParams);
}

// Track Download Events
function trackDownload(fileName, fileType) {
  trackEvent('download_resource', {
    'file_name': fileName,
    'file_type': fileType,
    'page_location': window.location.href
  });
}

// Track Form Submissions
function trackFormSubmit(formName) {
  trackEvent('generate_lead', {
    'form_name': formName,
    'page_location': window.location.href
  });
}

// Track Course Interest
function trackCourseInterest(courseName) {
  trackEvent('view_course', {
    'course_name': courseName,
    'page_location': window.location.href
  });
}

// Track Schedule Clicks
function trackScheduleClick(courseName) {
  trackEvent('schedule_interest', {
    'course_name': courseName,
    'page_location': window.location.href
  });
}

// Track Syllabus Downloads
function trackSyllabusDownload(courseName) {
  trackEvent('download_syllabus', {
    'course_name': courseName,
    'page_location': window.location.href
  });
}

// Automatic outbound link tracking
document.addEventListener('DOMContentLoaded', function() {
  // Track all external links
  const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
  externalLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      trackEvent('outbound_link', {
        'link_url': link.href,
        'link_text': link.innerText,
        'page_location': window.location.href
      });
    });
  });
  
  // Track all download links (PDFs, documents)
  const downloadLinks = document.querySelectorAll('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href*="/downloads/"]');
  downloadLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const fileName = link.href.split('/').pop();
      const fileType = fileName.split('.').pop();
      trackDownload(fileName, fileType);
    });
  });
  
  // Track scroll depth
  let scrollTracked = {
    '25': false,
    '50': false,
    '75': false,
    '100': false
  };
  
  window.addEventListener('scroll', function() {
    const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    
    Object.keys(scrollTracked).forEach(function(threshold) {
      if (scrollPercent >= parseInt(threshold) && !scrollTracked[threshold]) {
        scrollTracked[threshold] = true;
        trackEvent('scroll_depth', {
          'percent_scrolled': threshold,
          'page_location': window.location.href
        });
      }
    });
  });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId !== '#') {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Form Validation Helper
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Lead Capture Form Handler
function handleLeadCapture(formElement) {
  const email = formElement.querySelector('input[type="email"]').value;
  const name = formElement.querySelector('input[name="name"]')?.value || '';
  
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
  }
  
  // Track the conversion
  trackEvent('generate_lead', {
    'form_id': formElement.id,
    'page_location': window.location.href
  });
  
  // Mark as conversion in GA4
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
      'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL' // Replace with actual conversion ID
    });
  }
  
  return true;
}

// Demand Score Tracking (for internal analytics)
// Calculates interest signals for course scheduling decisions
function calculateDemandSignals() {
  // This could be used to send aggregated data to your backend
  // For now, it's tracked via GA4 events
  const signals = {
    'page_views': sessionStorage.getItem('page_views') || 0,
    'course_views': sessionStorage.getItem('course_views') || 0,
    'downloads': sessionStorage.getItem('downloads') || 0,
    'time_on_site': Math.round((Date.now() - (sessionStorage.getItem('session_start') || Date.now())) / 1000)
  };
  
  return signals;
}

// Initialize session tracking
if (!sessionStorage.getItem('session_start')) {
  sessionStorage.setItem('session_start', Date.now());
}
sessionStorage.setItem('page_views', parseInt(sessionStorage.getItem('page_views') || 0) + 1);

// Cookie Consent (Simple Version)
function showCookieConsent() {
  const cookieConsent = localStorage.getItem('cookie_consent');
  if (!cookieConsent) {
    // Show a simple cookie notice
    const notice = document.createElement('div');
    notice.className = 'cookie-notice';
    notice.innerHTML = `
      <div class="cookie-content">
        <p>We use cookies to analyze site traffic and improve your experience.</p>
        <button onclick="acceptCookies()">Accept</button>
      </div>
    `;
    document.body.appendChild(notice);
  }
}

function acceptCookies() {
  localStorage.setItem('cookie_consent', 'accepted');
  const notice = document.querySelector('.cookie-notice');
  if (notice) {
    notice.remove();
  }
}

// Show cookie consent on page load
window.addEventListener('load', showCookieConsent);
