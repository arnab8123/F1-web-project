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
