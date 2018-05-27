$(document).ready(() => {
    listenToFormSubmitEvent()
})

const listenToFormSubmitEvent = () => {
    const formElement = $(".article-search-form");
    formElement.on("submit", async event => {
        event.preventDefault()
        $("div.article-list").empty();
        const searchQuery = getUserSearchQuery();
        
        var search = ()=>{ return $.ajax({
            url:'https://en.wikipedia.org/w/api.php',
            type:'POST',
            data:{
                action: "query",
                list: "search",
                format: "json",
                srprop: "snippet",
                origin: "*",
                srsearch: encodeURI(searchQuery)
            },
            // success:function(res){
            //     return res;   
            // }
        })}     

        const data = await search();
        $('.article-search-form__input').html("")

        const doms = data.query.search.map((element)=>{
           return `<a href="https://en.wikipedia.org/?curid=${element.pageid}" target="_blank"
            class="article-view">
            <h3 className="article-view__title">${element.title}</h3>
            <p className="article-view__snippet">${element.snippet}</p>
            </a>`
        }).join("");

        $(".article-list").append(doms);
        
        /**
         * TODO:
         *  - Lấy từ khoá search của người dùng
         *  - Lấy data từ server wikipedia tương ứng với từ khoá search 
         *  - Từ data trả về, tạo một array DOM hiển thị các bài viết của wikipedia
         *  - Đưa các DOM trong array trên vào trong <div class="article-list"></div>
         */

    })
}
    function getUserSearchQuery(){
        const inputElement = $("#article-search-form__input");
        const  searchQuery = inputElement.val();
        return searchQuery;
    }
