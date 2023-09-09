const players = [
    {
        kitNumber: 7,
        name: "Son Heung-min",
        position: "Forward",
        country: "Korea",
        age: 31,
        goals: 3,
        assists: 0,
        photo: "https://cdne-totv8-prod-westeurope.azureedge.net/media/nwfnruzh/firstteam_2023_24_heungminson_1.png"
    },
    {
        kitNumber: 21,
        name: "Dejan Kulusevski",
        position: "Forward",
        country: "Sweden",
        age: 23,
        goals: 1,
        assists: 0,
        photo: "https://cdne-totv8-prod-westeurope.azureedge.net/media/fdbb2tgm/firstteam_2023_24_dejankulusevski_1.png"
    },
    {
        kitNumber: 29,
        name: "Pape Matar Sarr",
        position: "Midfielder",
        country: "Senegal",
        age: 20,
        goals: 1,
        assists: 1,
        photo: "https://cdne-totv8-prod-westeurope.azureedge.net/media/nsihvphk/firstteam_2023_24_papematarsarr_1.png"
    }
];

const getProfileCard = (player) => {
    const profileCard = document.createElement('profile-card');
    profileCard.setAttribute('kitNumber', player.kitNumber);
    profileCard.setAttribute('name', player.name);
    profileCard.setAttribute('position', player.position);
    profileCard.setAttribute('country', player.country);
    profileCard.setAttribute('age', player.age);
    profileCard.setAttribute('goals', player.goals);
    profileCard.setAttribute('assists', player.assists);
    profileCard.setAttribute('photo', player.photo);

    return profileCard;
}

players.forEach(player => {
    document.getElementById('container')?.appendChild(getProfileCard(player));
});
