(function i24Augmented() {

    async function doit() {
        try {

            // Extract article uuid from url, for example:
            // URL: /art/il-lavoro-giovani-travolto-virus-come-ripartire-la-pandemia-ADveyBX?s=hpf
            // UUID: ADveyBX
            var urlWithoutQuerystring = window.location.href.split("?")[0];
            var urlFragments = urlWithoutQuerystring.split("-");
            var articleUuid = urlFragments[urlFragments.length-1];

            // Prepare Graphql query
            var query = "fragment BaseArticleGallery on ArticleGallery {\n  uuid\n  slug\n  title {\n    leafTitle\n    __typename\n  }\n  menu {\n    uuid\n    slug\n    title {\n      leafTitle\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment BaseDossier on Dossier {\n  uuid\n  sectionId\n  subsectionId\n  label\n  slug\n  parentUuid\n  parentSlug\n  title {\n    leafTitle\n    __typename\n  }\n  __typename\n}\n\nfragment BaseAuthor on Author {\n  title\n  uuid\n  place\n  role\n  socialPages {\n    twitter\n    linkedin\n    email\n    __typename\n  }\n  avatar {\n    imagepath70 {\n      src\n      __typename\n    }\n    __typename\n  }\n  languages\n  arguments\n  prizes\n  authorPage\n  __typename\n}\n\nfragment ImagesWide on Article {\n  imageWide {\n    image1440 {\n      src\n      alt\n      __typename\n    }\n    __typename\n  }\n  imageWide {\n    image1170 {\n      src\n      alt\n      __typename\n    }\n    __typename\n  }\n  imageWide {\n    image835 {\n      src\n      alt\n      __typename\n    }\n    __typename\n  }\n  imageWide {\n    image672 {\n      src\n      alt\n      __typename\n    }\n    __typename\n  }\n  imageWide {\n    image403 {\n      src\n      alt\n      __typename\n    }\n    __typename\n  }\n  imageWide {\n    image310 {\n      src\n      alt\n      __typename\n    }\n    __typename\n  }\n  imageWide {\n    image237 {\n      src\n      alt\n      __typename\n    }\n    __typename\n  }\n  imageWide {\n    image154 {\n      src\n      alt\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment ImagesTags on Article {\n  imageTags {\n    fotohome390x390 {\n      src\n      alt\n      uuid\n      __typename\n    }\n    fotohome1440x624 {\n      src\n      alt\n      uuid\n      __typename\n    }\n    fotohome1440x752 {\n      src\n      alt\n      uuid\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment openings on EmbedContent {\n  uuid\n  type\n  ... on Content {\n    section\n    sectionId\n    subsection\n    subsectionId\n    subhead\n    slug\n    slugDate\n    title {\n      leafTitle\n      __typename\n    }\n    __typename\n  }\n  ... on Gallery {\n    url\n    cover {\n      big\n      __typename\n    }\n    json {\n      uuid\n      deepurl\n      sezione\n      title\n      images {\n        title\n        caption\n        large\n        src\n        __typename\n      }\n      __typename\n    }\n    photoNumber\n    __typename\n  }\n  ... on Video {\n    caption\n    duration\n    __typename\n  }\n  __typename\n}\n\nfragment embeds on EmbedContent {\n  ...openings\n  ... on Audio {\n    parentRubrica {\n      uuid\n      rubricaId\n      __typename\n    }\n    signature\n    title {\n      leadTitle {\n        href\n        text\n        target\n        __typename\n      }\n      __typename\n    }\n    url\n    caption\n    videoData {\n      embedded\n      id\n      embedCode\n      manageOnAir\n      urlPodcast\n      __typename\n    }\n    __typename\n  }\n  ... on Social {\n    user\n    tweetid\n    __typename\n  }\n  ... on Chart {\n    title {\n      leafTitle\n      __typename\n    }\n    dataHTML\n    dataURL\n    leadText\n    didascalia\n    __typename\n  }\n  ... on Quote {\n    text\n    signature\n    role\n    __typename\n  }\n  ... on Comment {\n    text\n    signature\n    titolo\n    date\n    imgFileref\n    __typename\n  }\n  ... on Image {\n    src\n    alt\n    caption\n    titolo\n    sommario\n    __typename\n  }\n  ... on Document {\n    subhead\n    title {\n      leafTitle\n      __typename\n    }\n    url\n    __typename\n  }\n  ... on Creativity {\n    title {\n      leafTitle\n      __typename\n    }\n    summary\n    dataHTML\n    __typename\n  }\n  ... on Map {\n    title {\n      leafTitle\n      __typename\n    }\n    dataHTML\n    leadText\n    __typename\n  }\n  ... on Podcast {\n    dataHTML\n    __typename\n  }\n  ... on RelatedEmbed {\n    titolo\n    testolink\n    link\n    image {\n      src\n      alt\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment BaseArticle on Article {\n  uuid\n  section\n  sectionId\n  subsectionId\n  subhead\n  slug\n  slugDate\n  subwebtype\n  webtype\n  __typename\n}\n\nquery foglia($uuid: String, $limitSfide: Int) {\n  article(uuid: $uuid) {\n    articleGallery {\n      ...BaseArticleGallery\n      __typename\n    }\n    ...BaseArticle\n    frontendTemplate\n    section\n    subsection\n    subsectionId\n    webtype\n    subwebtype\n    createdAt\n    updatedAt\n    trusted\n    trustedPayload\n    trustedPrvPayload\n    showUpdated\n    showListing\n    showCopyright\n    showPhoto\n    noindex\n    readingtime\n    signature\n    commentsNumber\n    summary\n    subhead\n    url\n    codicekbbar\n    authors {\n      ...BaseAuthor\n      __typename\n    }\n    tagAuthors\n    opening {\n      ...openings\n      __typename\n    }\n    title {\n      leafTitle\n      __typename\n    }\n    tags {\n      uuid\n      tagname\n      url\n      __typename\n    }\n    text {\n      text\n      embed {\n        ...embeds\n        __typename\n      }\n      node\n      __typename\n    }\n    imageSquare {\n      image390 {\n        src\n        alt\n        __typename\n      }\n      __typename\n    }\n    ...ImagesWide\n    ...ImagesTags\n    imageWide {\n      image1260 {\n        src\n        alt\n        __typename\n      }\n      image1020 {\n        src\n        alt\n        __typename\n      }\n      __typename\n    }\n    asides {\n      uuid\n      subhead\n      slug\n      title {\n        leafTitle\n        __typename\n      }\n      signature\n      subsection\n      subsectionId\n      sectionId\n      section\n      slug\n      slugDate\n      imageWide {\n        image310 {\n          src\n          alt\n          __typename\n        }\n        __typename\n      }\n      imageWide {\n        image237 {\n          src\n          alt\n          __typename\n        }\n        __typename\n      }\n      ... on Article {\n        pay\n        url\n        __typename\n      }\n      __typename\n    }\n    finCodes\n    liveFragments {\n      time\n      date\n      title\n      pos\n      name\n      author\n      text {\n        text\n        embed {\n          ...embeds\n          __typename\n        }\n        node\n        __typename\n      }\n      __typename\n    }\n    taxonomyInfo {\n      adunit\n      __typename\n    }\n    metaDescription\n    dossier {\n      ...BaseDossier\n      menu {\n        ...BaseDossier\n        __typename\n      }\n      __typename\n    }\n    commentsConfig {\n      showBox\n      allowComments\n      characters\n      __typename\n    }\n    sfida {\n      uuid\n      following\n      intro {\n        uuid\n        slug\n        following\n        shortTitle\n        title {\n          leadTitle {\n            text\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      items(limit: 3, exclude: [$uuid]) {\n        items {\n          uuid\n          title {\n            leadTitle {\n              text\n              __typename\n            }\n            __typename\n          }\n          subhead\n          subsection\n          subsectionId\n          createdAt\n          webtype\n          imageSquare {\n            image71 {\n              src\n              alt\n              __typename\n            }\n            __typename\n          }\n          url\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    relatedGroup {\n      label\n      related {\n        titolo\n        testolink\n        link\n        image {\n          src\n          alt\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    audioReadingIsPresent\n    audioReading {\n      ... on Audio {\n        signature\n        title {\n          leafTitle\n          leadTitle {\n            href\n            target\n            text\n            __typename\n          }\n          __typename\n        }\n        url\n        uuid\n        caption\n        imageSquare {\n          image71 {\n            src\n            __typename\n          }\n          __typename\n        }\n        videoData {\n          embedded\n          id\n          embedCode\n          manageOnAir\n          urlPodcast\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  sfide(limit: $limitSfide) {\n    items {\n      uuid\n      following\n      count\n      intro {\n        uuid\n        following\n        shortTitle\n        title {\n          leafTitle\n          leadTitle {\n            text\n            __typename\n          }\n          __typename\n        }\n        imageTall {\n          image625 {\n            src\n            alt\n            __typename\n          }\n          image420 {\n            src\n            alt\n            __typename\n          }\n          __typename\n        }\n        url\n        slug\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  audioReadingList(limit: 5) {\n    items {\n      uuid\n      title {\n        leadTitle {\n          text\n          href\n          __typename\n        }\n        __typename\n      }\n      subhead\n      subsectionId\n      subsection\n      signature\n      imageSquare {\n        image390 {\n          src\n          __typename\n        }\n        __typename\n      }\n      audioReadingIsPresent\n      audioReading {\n        uuid\n        duration\n        title {\n          leafTitle\n          __typename\n        }\n        videoData {\n          id\n          uuid\n          urlPodcast\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n";
            var requestJson = {
                operationName: "foglia",
                variables: {
                    uuid: articleUuid,
                    limitSfide:7
                },
                query: query
            }

            // Make Graphql request
            var response = await fetch("https://24plus.ilsole24ore.com/api/graphql", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "x-nile-client": "24plus",
                },
                body: JSON.stringify(requestJson),
            });

            // Extract article
            var responseBody = await response.text();
            var json = JSON.parse(responseBody);
            var trustedPayload = JSON.parse(json.data.article.trustedPayload);
            var articleContents = trustedPayload.articleBody;
            articleContents = articleContents.replace(/&#46;/g, ".<br>&nbsp;<br>");

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
