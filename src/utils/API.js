import axios from "axios";

export default {
  artwork: function(name) {
    return axios.get("http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=HL1efuBb94dyxW22aerGmgUCCtmp0MpW&limit=21"
    );
  },

};
