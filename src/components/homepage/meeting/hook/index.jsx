export const hookApi = async () => {

    try {
        const map = await axios("ktkAxTFH_PDaimfj0Z-h895aW64g9RsPiZ4MjTjofdg")
        console.log(map);
        // console.log(map.request);
        // if(map.status === 200){
        //   // console.log("i am four");
        //   console.log(map.responseText.json());
        // }

    } catch (error) {
        console.log(error);
    }
}

// hookApi()