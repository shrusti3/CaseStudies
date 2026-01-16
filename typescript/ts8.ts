type Profile={
  username: string;
  bio: string|null;
  avatarUrl?:string;
}

let profile1: Profile={
  username: "SRJ123",
  bio: null
  //avatarurl is intentionally empty
};

let profile2: Profile={
  username: "JJK321",
  bio: "Hi i am a student",
  avatarUrl:"https.xhjggsjjjdf.com/abc.jpg"

};

function showProfile(profile:Profile):void{
  let bioInfo = profile.bio === null ? "Bio not provided" : `Bio: ${profile.bio}`;
  let avatarInfo=profile.avatarUrl??"default image";
  console.log(`${profile.username} | ${bioInfo} | Avatar: ${avatarInfo}`);
  
}

showProfile(profile1);
showProfile(profile2);
