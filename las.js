(function lasAugmented() {

    async function doit() {
        try {

            // Re-fetch the current page
            var response = await fetch(window.location.href+"?refresh_ce", {
                method: "GET",
                credentials: "include",
            });

            // Extract article
            var responseBody = await response.text();
            // var regex = /<div class="entry__content" id="article-body">([\s\S]+?)/;
            var regex = /<div class="entry__content" id="article-body">([\s\S]+?)<\/*div/;
            var found = responseBody.match(regex);
            var articleContents = found[1].trim().replace(/<p>/g, "\n\n<p>");

            // Replace current page's HTML with article's
            var el = document.createElement("div");
            el.innerHTML = articleContents;

            var style = document.createElement("style");
            style.innerHTML = "body { padding: 10% 20%; line-height: 1.6em; font-size: 16pt; } p { margin-bottom: 20px; }";

            var body = document.querySelectorAll("body")[0];
            body.innerHTML = "";
            body.appendChild(el);
            body.appendChild(style);

        } catch(err) {
            console.log("ERROR - " + err);
            return;
        }
    }

    doit().then().catch();

})();
