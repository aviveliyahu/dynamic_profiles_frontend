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
 //Written by Matan Asraf
    let endorsement_files = data.endorsement_files
    console.log(endorsement_files);

    end_title = document.getElementById('end_title');
    // to implement Endorsement section
    for (file of endorsement_files) {
        console.log(file);
        let end_right = document.createElement('div');
        end_right.className = "end_right";

        let end_box = document.createElement('p');
        end_box.className = "end_box";
        end_box.innerHTML = file.split("\n")[0];

        end_right.appendChild(end_box);

        let seperator = document.createElement('p');
        seperator.className = "seperator";
        seperator.innerHTML = file.split("\n")[1];

        end_right.appendChild(seperator);

        end_title.appendChild(end_right);
    }
};
function insertFriends(data){
    //Written by Matan Asraf
    // to implement Friends section
     let filtered_friends = data.filtered_friends;
     console.log(filtered_friends);

    friends_title = document.getElementById('friends_title');

    for(friend of filtered_friends) {
        console.log(friend);
        let profile = document.createElement('a');  //כאן עד סוף הקטע השתמשתי בchatGPT
        profile.href = `/profile?id=${friend}`; 
        // Create an image element
        let img = document.createElement('img');
        img.className = 'friends_img';
        img.src = `${friend}/profile.png`;
        img.alt = `${friend}_img`;

        // Append the image to the anchor
        profile.appendChild(img);

        // Append the anchor to the friends container
        friendsContainer.appendChild(profile);  //עד כאן התשמשתי בchatGPT 
    }
}


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