/**
 * Created by pranavkapoor on 27/07/17.
 */

var getUser=function (id,callback) {

    var user={
        id:id,
        name:'pranav'
    };
    setTimeout(()=>{
        callback(user);

    },3000)
};
getUser(31,(userObject)=>{
    console.log(userObject);
});
