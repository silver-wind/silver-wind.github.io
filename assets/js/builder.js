const build_block_right = (projectDescription, projectLink) => {
    let html_code = `<div class="gjs-row project-container">
            <div class="gjs-cell">
                <div class="gjs-row project-row">
                    <div class="gjs-cell project-image-col">
                        <img src="${projectLink}/preview.png" class="project-image"/>
                    </div>
                    <div class="aboutProject" class="gjs-cell">
                        <div class="gjs-row project-text-col">
                            <div class="gjs-cell project-text-col-2">
                                <div class="project-text-title">О проекте<br/></div>
                                <div class="project-text-text">${projectDescription}</div>
                                <a href="${projectLink}/index.html" style="text-decoration: none; color: green"><div class="project-text-demo">Demo Live<br/></div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    return html_code
}

const build_block_left = (projectDescription, projectLink) => {
    let html_code = `<div class="gjs-row project-container left">
    <div class="gjs-cell">
        <div class="gjs-row project-row reverse">
            <div class="gjs-cell project-image-col">
                <img src="${projectLink}/preview.png" class="project-image2"/></div>
            <div class="aboutProject" class="gjs-cell">
                <div class="gjs-row project-text-col">
                    <div class="gjs-cell project-text-col-2">
                        <div class="project-text-title">О проекте<br/></div>
                        <div class="project-text-text">${projectDescription}</div>
                        <a href="${projectLink}/index.html" style="text-decoration: none; color: green"><div class="project-text-demo">Demo Live<br/></div></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
    return html_code
}