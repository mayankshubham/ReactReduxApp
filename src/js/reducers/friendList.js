const initialState =  {
    data: [ {
      key:1,
      name: "Steve",
      phone: "03974645875",
      email: "st@gmail.com",
      work:"Engg",
      city:"NY"
    }
    ,{
      key:2,
      name: "Stella",
      phone: "04424645875",
      email: "stella@gmail.com",
      work:"Architect",
      city:"NY"
    },{
      key:3,
      name: "Leo",
      phone: "68546855875",
      email: "leo@outlook.com",
      work:"Engg",
      city:"NY"
    },{
      key:4,
      name: "RK",
      phone: "67544645875",
      email: "rkgmail.com",
      work:"Engg",
      city:"NY"
    }]
}

const FriendList = (state=initialState, action) => {
	switch(action) {
		case "EDIT_FRIEND_DATA": 
			return state
		default: 
			return state
	}
}

export default FriendList;