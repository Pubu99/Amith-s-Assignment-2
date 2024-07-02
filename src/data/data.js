import SongImage_1 from '../assests/images/song.jpg'
import SongImage_2 from '../assests/images/song_2.jpg'
import SongImage_3 from '../assests/images/song_3.jpg'
import SongImage_4 from '../assests/images/song_4.jpg'

const songsData = [
    {
      "title": "Wrong Semicolon",
      "image": getRandomImage(),
      "artist": "Artist 1",
      "sound_url": "https://soundcloud.com/roughstatemusic/galactixx-pray-for-me-out-now?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      "title": "Essential coffee",
      "image": getRandomImage(),
      "artist": "Artist 2",
      "sound_url": "https://soundcloud.com/roughstatemusic/galactixx-pray-for-me-out-now?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      "title": "Hmm Standard code",
      "image": getRandomImage(),
      "artist": "Artist 3",
      "sound_url": "hmm_standard_code.mp3"
    },
    {
      "title": "Focus on Deadline",
      "image": getRandomImage(),
      "artist": "Artist 4",
      "sound_url": "focus_on_deadline.mp3"
    },
    {
      "title": "24/7 Coding Non-stop",
      "image": getRandomImage(),
      "artist": "Artist 5",
      "sound_url": "coding_non_stop.mp3"
    },
    {
      "title": "Bounty On My Code",
     "image": getRandomImage(),
      "artist": "Artist 6",
      "sound_url": "bounty_on_my_code.mp3"
    },
    {
      "title": "Debugging Battles",
      "image": getRandomImage(),
      "artist": "Artist 7",
      "sound_url": "debugging_battles.mp3"
    },
    {
      "title": "Dancing While Coding",
      "image": getRandomImage(),
      "artist": "Artist 8",
      "sound_url": "dancing_while_coding.mp3"
    },
    {
      "title": "Hiding from investors",
      "image": getRandomImage(),
      "artist": "Artist 9",
      "sound_url": "hiding_from_investors.mp3"
    },
    {
      "title": "Doctor, I Can't C#",
     "image": getRandomImage(),
      "artist": "Artist 10",
      "sound_url": "doctor_i_cant_csharp.mp3"
    },
    {
      "title": "Devil's Validation",
      "image": getRandomImage(),
      "artist": "Artist 11",
      "sound_url": "devils_validation.mp3"
    },
    {
      "title": "Apocalyptic Java",
      "image": getRandomImage(),
      "artist": "Artist 12",
      "sound_url": "apocalyptic_java.mp3"
    },
    {
      "title": "Infinite Acoustic",
      "image": getRandomImage(),
      "artist": "Artist 13",
      "sound_url": "infinite_acoustic.mp3"
    },
    {
      "title": "Rain Sounds",
      "image": getRandomImage(),
      "artist": "Artist 14",
      "sound_url": "rain_sounds.mp3"
    },
    {
      "title": "Not Enough RAM",
      "image": getRandomImage(),
      "artist": "Artist 15",
      "sound_url": "not_enough_ram.mp3"
    },
    {
      "title": "Coding From A Jungle",
     "image": getRandomImage(),
      "artist": "Artist 16",
      "sound_url": "coding_from_a_jungle.mp3"
    },
    {
      "title": "Oops I Hardcoded 😅",
      "image": getRandomImage(),
      "artist": "Artist 17",
      "sound_url": "oops_i_hardcoded.mp3"
    },
    {
      "title": "Same Phone. New Price",
      "image": getRandomImage(),
      "artist": "Artist 18",
      "sound_url": "same_phone_new_price.mp3"
    },
    {
      "title": "Coding RAP",
      "image": getRandomImage(),
      "artist": "Artist 19",
      "sound_url": "coding_rap.mp3"
    },
    {
      "title": "Sing While Coding",
      "image": getRandomImage(),
      "artist": "Artist 20",
      "sound_url": "sing_while_coding.mp3"
    },
    {
      "title": "Coding like Elvis",
     "image": getRandomImage(),
      "artist": "Artist 21",
      "sound_url": "coding_like_elvis.mp3"
    },
    {
      "title": "Tres Commas Jam",
      "image": getRandomImage(),
      "artist": "Artist 22",
      "sound_url": "tres_commas_jam.mp3"
    },
    {
      "title": "Dorm room Coding",
      "image": getRandomImage(),
      "artist": "Artist 23",
      "sound_url": "dorm_room_coding.mp3"
    },
    {
      "title": "Mr.Robot's Secret",
      "image": getRandomImage(),
      "artist": "Artist 24",
      "sound_url": "mr_robots_secret.mp3"
    },
    {
      "title": "Recursive Code",
      "image": getRandomImage(),
      "artist": "Artist 25",
      "sound_url": "recursive_code.mp3"
    },
    {
      "title": "Elon's Mars Radio",
      "image": getRandomImage(),
      "artist": "Artist 26",
      "sound_url": "elons_mars_radio.mp3"
    },
    {
      "title": "Gilfoyle's Hacking Jam",
      "image": getRandomImage(),
      "artist": "Artist 27",
      "sound_url": "gilfoyles_hacking_jam.mp3"
    },
    {
      "title": "Coding Mission",
      "image": getRandomImage(),
      "artist": "Artist 28",
      "sound_url": "coding_mission.mp3"
    },
    {
      "title": "Uncommented Code",
      "image": getRandomImage(),
      "artist": "Artist 29",
      "sound_url": "uncommented_code.mp3"
    },
    {
      "title": "Maker In Love 💚",
      "image": getRandomImage(),
      "artist": "Artist 30",
      "sound_url": "maker_in_love.mp3"
    },
    {
      "title": "Compiler Got Angry 😡",
      "image": getRandomImage(),
      "artist": "Artist 31",
      "sound_url": "compiler_got_angry.mp3"
    },
    {
      "title": "Unbelievable Focus 🙏",
      "image": getRandomImage(),
      "artist": "Artist 32",
      "sound_url": "unbelievable_focus.mp3"
    },
    {
      "title": "Lost in a Forest 🌲",
      "image": getRandomImage(),
      "artist": "Artist 33",
      "sound_url": "lost_in_a_forest.mp3"
    },
    {
      "title": "You Compile Me 💚",
      "image": getRandomImage(),
      "artist": "Artist 34",
      "sound_url": "you_compile_me.mp3"
    },
    {
      "title": "Stuck in an elevator 😧",
      "image": getRandomImage(),
      "artist": "Artist 35",
      "sound_url": "stuck_in_an_elevator.mp3"
    },
  ];
  


  function getRandomImage() {
    const images = [SongImage_1, SongImage_2, SongImage_3, SongImage_4];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  
  export default songsData;