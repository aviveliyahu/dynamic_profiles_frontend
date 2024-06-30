let url = new URLSearchParams(window.location.search);
let profile_id = url.get('id');

fetch(`/json?id=${profile_id}`)
.then(function (response){
    return response.json();
}).then(function (data) {
    insertImages();
    insertInfo(data);
    insertEndorsement(data);
    insertFriends(data);
});

function insertInfo(data){
    let info_title = document.getElementById('info_title');
    info_title.innerHTML = data.title_lines[0];
    let second_title = document.getElementById("second_title");
    second_title.innerHTML = data.title_lines[1];

    // need to also implement bio_lines here
    let bio_lines = data.bio_lines;
    console.log(bio_lines);

    mickey_info = document.getElementById('mickey_info');

    for (line of bio_lines){
        console.log(line);
        let parameter_titles = document.createElement('div');
        parameter_titles.className = "parameter_titles"

        let parameters = document.createElement('p');
        parameters.className = "parameters";
        parameters.innerHTML = line.split(":")[0];
        
        parameter_titles.appendChild(parameters);

        let answers = document.createElement('p');
        answers.className = "answers";
        answers.innerHTML = line.split(":").slice(1).join(":");

        parameter_titles.appendChild(answers);

        mickey_info.appendChild(parameter_titles);
    };
};

function insertEndorsement(data){

    // to implement Endorsement section

};

function insertFriends(data){
    // to implement Friends section
};


function insertImages(){
    let banner_div = document.querySelector('.banner');
    let back_img = document.createElement('img');
    back_img.id = 'back_img';
    back_img.src = `/${profile_id}/banner.png`;
    banner_div.appendChild(back_img);

    let profile_div = document.querySelector('.profile');
    let profile_img = document.createElement('img');
    profile_img.id = "profile_img";
    profile_img.src = `/${profile_id}/profile.png`;
    profile_div.appendChild(profile_img);

    let info_right_div = document.getElementById('info_right');
    let info_img = document.createElement('img');
    info_img.id = "info_img";
    info_img.src = `/${profile_id}/image1.png`;
    info_right_div.appendChild(info_img);

    let end_left_div = document.getElementById('end_left');
    let end_img = document.createElement('img');
    end_img.id = "end_img";
    end_img.src = `/${profile_id}/image2.png`;
    end_left_div.appendChild(end_img);

};