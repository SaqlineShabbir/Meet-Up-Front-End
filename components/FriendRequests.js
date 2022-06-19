import React from 'react';
import PeopleKnow from './PeopleKnow';
import Request from './Request';

const requests = [
    {
        id:1,
      name: "Jeff Bezoz",
      src: "https://links.papareact.com/k2j",
      profile: "https://links.papareact.com/f0p",
    },
    { id:2,
      name: "Elon Musk",
      src: "https://links.papareact.com/4zn",
      profile: "https://links.papareact.com/kxk",
    },
    { id:3,
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zvy",
    },
    { 
        id:4,
      name: "Mark Zuckerberg",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
    },
    { id:5,
      name: "Sonny Sangha",
      src: "https://links.papareact.com/zof",
      profile: "https://links.papareact.com/l4v",
    },
    {
        id:6,
      name: "Jeff Bezoz",
      src: "https://links.papareact.com/k2j",
      profile: "https://links.papareact.com/f0p",
    },
    { id:7,
      name: "Elon Musk",
      src: "https://links.papareact.com/4zn",
      profile: "https://links.papareact.com/kxk",
    },
    { id:8,
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zvy",
    },
    { 
        id:9,
      name: "Mark Zuckerberg",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
    },
    { id:10,
      name: "Sonny Sangha",
      src: "https://links.papareact.com/zof",
      profile: "https://links.papareact.com/l4v",
    },
    { id:11,
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
      },
      { 
          id:12,
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
      },
      { id:13,
        name: "Sonny Sangha",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
      },
  ];

  const filterdPeople= requests.slice(5,10)
  console.log(filterdPeople)

const FriendRequests = () => {
    return (
      <div>
        <div className='grid grid-cols-4 gap-4 h-full'>
           
           {
            requests?.slice(0,7).map((request)=>(
                <Request key={request.id} request={request}/>
            ))
           }
        </div>
        <hr className='mt-10'/>
        <h1 className='text-3xl mt-10 font-bold'>People you may know</h1>
        <div className='grid grid-cols-4 gap-4 h-full'>
         
        {
            filterdPeople.map((request)=>(
                <PeopleKnow key={request.id} request={request}/>
            ))
           }
        </div>
        </div>
    );
};

export default FriendRequests;