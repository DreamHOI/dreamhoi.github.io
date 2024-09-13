let humanIdx = "with_obj_render0";

const results = [
    {experiment: "human-climb-stairs", prompt: "climbing stairs"},
    {experiment: "human-sit-stairs", prompt: "sitting on stairs"},
    {experiment: "human-sit-boat-v0", prompt: "sitting in a boat"},
    {experiment: "human-sit-velvet_sofa_fix", prompt: "sitting on a sofa"},
    {experiment: "smplh-balance-ball-v2-1-lsa21000-gs50-bad", prompt: "balancing on a ball"},
    {experiment: "smplh-pushup-ball-v2-1-lsa21000-gs50-bad", prompt: "doing pushups on a ball"},
    {experiment: "smplh-sit-ball-v0-1-lsa21000-gs50-bad", prompt: "sitting on a ball"},
    {experiment: "smplh-jump-sofa-v0-1-lsa21000-gs50-bad", prompt: "jumping onto a sofa"},
    {experiment: "smplh-nap-sofa-v0-1-lsa21000-gs50-bad", prompt: "napping on a sofa"},
    {experiment: "smplh-sit-sofa-v0-1-lsa21000-gs50-bad", prompt: "sitting on a sofa"},
    {experiment: "smplh-open-wardrobe-v0-1-lsa21000-gs50-bad", prompt: "opening a wardrobe"},
    {experiment: "smplh-hold-tv-v3-1-lsa21000-gs50-bad", prompt: "holding a TV"},
    {experiment: "smplh-put-tv-v1-1-lsa21000-gs50-bad", prompt: "putting a TV on the floor"},
    {experiment: "smplh-raise-tv-v2-1-lsa21000-gs50-bad", prompt: "raising a TV above his head"},
    // {experiment: "human-yoga-bed-rot90", prompt: "doing yoga poses on a bed"},
    {experiment: "smplh-jump-bed-v0-1-lsa21000-gs50-bad", prompt: "jumping on a bed"},
    {experiment: "smplh-lie-bed-v0-1-lsa21000-gs50-bad", prompt: "lying on a bed"},
    {experiment: "smplh-yoga-bed-v0-1-lsa21000-gs50-bad", prompt: "doing yoga poses on a bed"},
    {experiment: "smplh-read-bed-v0-1-lsa21000-gs50-bad", prompt: "reading on a bed"},
    {experiment: "smplh-stretch-bed-v0-1-lsa21000-gs50-bad", prompt: "stretching on a bed"},
    {experiment: "smplh-ride-motorcycle-cruiser-v0-1-lsa21000-gs50-bad", prompt: "riding a motorcycle"},
    {experiment: "smplh-ride-motorcycle-dirt-v0-1-lsa21000-gs50-bad", prompt: "riding a motorcycle"},
    // {experiment: "smplh-ride-motorcycle-racing-v0-1-lsa21000-gs50-bad", prompt: "riding a motorcycle"},
    // {experiment: "smplh-ride-motorcycle-scooter-v0-1-lsa21000-gs50-bad", prompt: "riding a motorcycle"},
    // {experiment: "smplh-ride-motorcycle-standard-v0-1-lsa21000-gs50-bad", prompt: "riding a motorcycle"},
    {experiment: "smplh-ride-scooter-v0-1-lsa21000-gs50-bad", prompt: "riding a scooter"},
    {experiment: "human-press-bench-v0-nomv", prompt: "doing bench presses"},
    {experiment: "human-sit-bench-v0", prompt: "sitting on a gym bench"},
    // {experiment: "smplh-dumbbell-bench-v0-1-lsa21000-gs50-bad", prompt: "doing dumbbell curls on a bench"},
    // {experiment: "smplh-lie-bench-v0-1-lsa21000-gs50-bad", prompt: "lying on a gym bench"},
    // {experiment: "smplh-stretch-bench-v0-1-lsa21000-gs50-bad", prompt: "stretching on a gym bench"},
    {experiment: "smplh-use-telescope-v0-nolosses-1", prompt: "using a telescope"},
    {experiment: "human-hug-dragon", prompt: "hugging a dragon"},
    {experiment: "human-ride-dragon", prompt: "riding a dragon"},
]

$(document).ready(() => {
    $(".human-choice").on("click", e => {
        $(".human-choice").removeClass("active");
        $(e.target).addClass("active");
        humanIdx = $(e.target).attr("data-human-choice");
        updateVideos();
    });
    $("#teaser-video").on("click mouseenter", e => {
        $(e.target).attr("controls", "controls");
    });
    for (result of results) {
        $("#dreamhoi-displays").append(`
            <div class="dreamhoi-display square-image">
                <video id="video-${result.experiment}" src="static/videos/renders/${result.experiment}/${humanIdx}.mp4" muted nocontrols autoplay loop playsinline></video>
                <p class="has-text-centered"><i>${result.prompt}</i></p>
            </div>
        `);
    }
});

function updateVideos() {
    for (result of results) {
        $(`#video-${result.experiment}`).attr("src", `static/videos/renders/${result.experiment}/${humanIdx}.mp4`);
    }
}
