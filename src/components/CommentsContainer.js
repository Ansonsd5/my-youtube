import React from 'react';

const commentsData = [{

    userName : "Anson",
    comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
    replies : [
        {

            userName : "Anson",
            comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
            replies : [],
        },
        {

            userName : "Anson",
            comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
            replies : [],
        },{

            userName : "Anson",
            comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
            replies : [],
        }
    ],
},
{

    userName : "Anson",
    comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
    replies : [{

        userName : "Anson",
        comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
        replies : [{

            userName : "Anson",
            comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
            replies : [],
        },{

            userName : "Anson",
            comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
            replies : [{

                userName : "Anson",
                comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
                replies : [],
            },{

                userName : "Anson",
                comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
                replies : [{

                    userName : "Anson",
                    comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
                    replies : [{

                        userName : "Anson",
                        comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
                        replies : [{

                            userName : "Anson",
                            comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
                            replies : [{

                                userName : "Anson",
                                comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
                                replies : [],
                            }],
                        }],
                    }],
                },{

                    userName : "Anson",
                    comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
                    replies : [],
                }],
            },],
        }],
    },
    {

        userName : "Anson",
        comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
        replies : [],
    },{

        userName : "Anson",
        comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
        replies : [],
    }],
},
{

    userName : "Anson",
    comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
    replies : [],
},{

    userName : "Anson",
    comment : "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
    replies : [],
}];


const Comment = ({data}) =>{
   
    // const {userName, comment, replies} = data;
   return <div className=' p-4  '>

    {data.map((comment) => (<>
    <div className='flex   bg-slate-100 mb-2 rounded-lg gap-4 p-4 border-l-2 border-opacity-20'>
        <img className='w-8 h-8' src='https://img.icons8.com/?size=50&id=11781&format=png' alt='user'/>
        <div>
        <div>{comment.userName}</div>
        <div>{comment.comment}</div>
        <Comment data={comment.replies}/>
        
        </div>
        </div>
        </>
    )) }
        
    </div>

}

const CommentsContainer = () => {
  return (<>
    <div className='font-bold text-xl px-4'>Comments</div>
    <Comment data={commentsData}/>
    
    
    </>
  )
}

export default CommentsContainer