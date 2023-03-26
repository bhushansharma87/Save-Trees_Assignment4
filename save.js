var imgs=[
    'https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4225315/pexels-photo-4225315.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/60112/pexels-photo-60112.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1423589/pexels-photo-1423589.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4122226/pexels-photo-4122226.jpeg?auto=compress&cs=tinysrgb&w=600'
]
var rsns = [
    'Trees provide us Oxygen to survive',
    'Trees give us food and shelter',
    'Trees are habitat for many animal species',
    'Forests help in prevention of soil erosion',
    'Trees are the cause of precipitation'
]
var i=0;
function next(){
    if(i>=rsns.length){
    i=0;
    }
    document.getElementById('reasons').innerHTML=rsns[i];
    document.getElementById('img1').src=imgs[i];
    i++;

}


