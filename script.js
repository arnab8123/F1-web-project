const scrollDRContainer = document.getElementById("drivers_box_scrolable");
const btnDRNext = document.getElementById("drivers_box_nav_for");
const btnDRPrev = document.getElementById("drivers_box_nav_rev");

if(scrollDRContainer && btnDRNext && btnDRPrev)
{
    const scrollAmount = 280;

    btnDRNext.addEventListener("click", () =>
    {
        scrollDRContainer.scrollBy({ left:scrollAmount, behavior:"smooth" });
    });

    btnDRPrev.addEventListener("click", () =>
    {
        scrollDRContainer.scrollBy({ left:-scrollAmount, behavior:"smooth" });
    });
}

const scrollYTSContainer = document.getElementById("yt_box_scrolable");
const btnYTSNext = document.getElementById("yt_box_nav_for");
const btnYTSPrev = document.getElementById("yt_box_nav_rev");

if(scrollYTSContainer && btnYTSNext && btnYTSPrev)
{
    const scrollAmount = 280;

    btnYTSNext.addEventListener("click", () =>
    {
        scrollYTSContainer.scrollBy({ left:scrollAmount, behavior:"smooth" });
    });

    btnYTSPrev.addEventListener("click", () =>
    {
        scrollYTSContainer.scrollBy({ left:-scrollAmount, behavior:"smooth" });
    });
}

const scrollYTVContainer = document.getElementById("ytv_box_scrolable");
const btnYTVNext = document.getElementById("ytv_box_nav_for");
const btnYTVPrev = document.getElementById("ytv_box_nav_rev");

if(scrollYTVContainer && btnYTVNext && btnYTVPrev)
{
    const scrollAmount = 280;

    btnYTVNext.addEventListener("click", () =>
    {
        scrollYTVContainer.scrollBy({ left:scrollAmount, behavior:"smooth" });
    });

    btnYTVPrev.addEventListener("click", () =>
    {
        scrollYTVContainer.scrollBy({ left:-scrollAmount, behavior:"smooth" });
    });
}

const video = document.getElementById("body_video");
const bodyImg = document.getElementById("body_img");
const muteBtn = document.getElementById("mute_btn");
const skipBtn = document.getElementById("skip_btn");
const videoControls = document.getElementById("video_controls");

document.addEventListener("click", () =>
{
    if(video && video.muted)
    {
        video.muted = false;
        video.volume = 1;
    }
},{ once:true });

muteBtn.addEventListener("click", () =>
{
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? "🔇" : "🔊";
});

skipBtn.addEventListener("click", endVideo);
video.addEventListener("ended", endVideo);

function endVideo()
{
    video.style.opacity = "0";

    setTimeout(() =>
    {
        video.pause();
        video.style.display = "none";
        videoControls.style.display = "none";
        bodyImg.classList.add("video-ended");
    },600);
}

document.querySelectorAll(".yt_vd_box").forEach(box =>
{
    const video = box.querySelector(".yt_video");
    const muteBtn = box.querySelector(".yt_mute_btn");

    box.addEventListener("mouseenter", () =>
    {
        video.play();
    });

    box.addEventListener("mouseleave", () =>
    {
        video.pause();
        video.currentTime = 0;
    });

    muteBtn.addEventListener("click", e =>
    {
        e.stopPropagation();
        video.muted = !video.muted;
        muteBtn.textContent = video.muted ? "🔇" : "🔊";
    });
});

const modal = document.getElementById("ytv_modal");
const modalVideo = document.getElementById("ytv_modal_video");
const modalClose = document.getElementById("ytv_modal_close");

document.addEventListener("click", e =>
{
    if(e.target.classList.contains("ytv_play_btn"))
    {
        const box = e.target.closest(".ytv_vd_box");
        modalVideo.src = box.dataset.video;
        modal.style.display = "flex";
        modalVideo.play();
    }
});

modalClose.addEventListener("click", () =>
{
    modalVideo.pause();
    modalVideo.src = "";
    modal.style.display = "none";
});

const buttons = document.querySelectorAll(".switch_btn");
const contents = document.querySelectorAll(".content_box");

buttons.forEach(btn =>
{
    btn.addEventListener("click", () =>
    {
        buttons.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(btn.dataset.target).classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", () =>
{
    const images = document.querySelectorAll(".box_big img, .box_tall img");

    const observer = new IntersectionObserver(entries =>
    {
        entries.forEach(entry =>
        {
            if(entry.isIntersecting)
            {
                entry.target.classList.add("zoom");
            }
        });
    },{ threshold:0.7 });

    images.forEach(img => observer.observe(img));
});

window.addEventListener("load", () =>
{
    const loader = document.getElementById("page_loader");
    const video = document.getElementById("body_video");
    const muteBtn = document.getElementById("mute_btn");
    const GIF_DURATION = 2550;

    document.addEventListener("click", () =>
    {
        video.muted = false;
        video.volume = 1;
        muteBtn.textContent = "🔊";
    },{ once:true });

    setTimeout(() =>
    {
        video.currentTime = 0;
        video.play().catch(() => {});
        loader.classList.add("fade-out");

        setTimeout(() =>
        {
            loader.style.display = "none";
        },600);

    },GIF_DURATION);
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

if (mobileMenuBtn && mobileMenu) {
    // Toggle menu function
    function toggleMenu() {
        const isActive = mobileMenu.classList.contains('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (!isActive) {
            // Animate to X
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            // Reset to hamburger
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    }
    
    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close menu when clicking on overlay
    overlay.addEventListener('click', function() {
        if (mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Close menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });
    
    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Close menu when resizing to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const bodyImg = document.getElementById('body_img');
    const bodyVideo = document.getElementById('body_video');
    const bImg = document.getElementById('b_img');
    const muteBtn = document.getElementById('mute_btn');
    const skipBtn = document.getElementById('skip_btn');
    
    // Set video to autoplay when page loads
    bodyVideo.muted = true;
    bodyVideo.play().catch(error => {
        console.log("Autoplay prevented:", error);
        // Show fallback image if autoplay is blocked
        bodyImg.classList.add('video-ended');
    });
    
    // Video ended event
    bodyVideo.addEventListener('ended', function() {
        bodyImg.classList.add('video-ended');
        this.style.display = 'none';
    });
    
    // Mute/Unmute button
    if (muteBtn) {
        muteBtn.addEventListener('click', function() {
            if (bodyVideo.muted) {
                bodyVideo.muted = false;
                this.textContent = '🔊';
                // Try to play if it was paused
                bodyVideo.play().catch(e => console.log("Play failed:", e));
            } else {
                bodyVideo.muted = true;
                this.textContent = '🔇';
            }
        });
    }
    
    // Skip button - immediately show image
    if (skipBtn) {
        skipBtn.addEventListener('click', function() {
            bodyVideo.pause();
            bodyImg.classList.add('video-ended');
            bodyVideo.style.display = 'none';
        });
    }
    
    // Fallback: If video fails to load, show image
    bodyVideo.addEventListener('error', function() {
        console.log("Video failed to load");
        bodyImg.classList.add('video-ended');
        bodyVideo.style.display = 'none';
    });
    
    // Optional: Replay on click after video ended
    bodyImg.addEventListener('click', function() {
        if (bodyImg.classList.contains('video-ended')) {
            bodyImg.classList.remove('video-ended');
            bodyVideo.style.display = 'block';
            bodyVideo.currentTime = 0;
            bodyVideo.muted = true;
            muteBtn.textContent = '🔇';
            bodyVideo.play().catch(e => console.log("Replay failed:", e));
        }
    });
});