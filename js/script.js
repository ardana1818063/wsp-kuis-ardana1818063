$('#search-button').on('click', function(){

    $.ajax({
        url: 'https://valorant-api.com/v1/agents',
        type: 'get',
        dataType: 'json',
        data: {
            language: 'en-US',

        },
        success: function (result) {
            if (result.status == 200) {
                let movies = result.data;
                console.log(movies);

                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card" id="navbar-example2">
                                <img src="`+data.displayIcon+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">`+data.displayName+`</h5>
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                <h4 id="scrollspyHeading1">Overview</h4>
                                    <p class="card-text">`+data.description+`</p>
                                </div>
                                </div>
                            </div>                    
                        </div>
                    `);
                });
                
            } else {
                $('#movie-list').html('<h1>Agent Not Found!</h1>');
            }
        }
    })
});

$('#upcoming-button').on('click', function(){

    $.ajax({
        url: 'https://valorant-api.com/v1/weapons',
        type: 'get',
        dataType: 'json',
        data: {
            language: 'en-US',

        },
        success: function (result) {
            if (result.status == 200) {
                let movies = result.data;
                console.log(movies);

                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card" id="navbar-example2">
                                <img src="`+data.displayIcon+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">`+data.displayName+`</h5>
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                
                                </div>
                                </div>
                            </div>                    
                        </div>
                    `);
                });
                
            } else {
                $('#movie-list').html('<h1>Weapon Not Found!</h1>');
            }
        }
    })
});