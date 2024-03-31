//----------------------------for modal window-----------------------------------------

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for(let i=0;i<btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener('click',openModal);
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
// overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});


//----------------------------for different chapters-------------------------------------------

const chapter1= document.querySelector('.chapter1');
const chapter2= document.querySelector('.chapter2');
const chapter3= document.querySelector('.chapter3');

const phy_chapter1= document.querySelector('.phy_chapter-1');
const phy_chapter2= document.querySelector('.phy_chapter-2');
const phy_chapter3= document.querySelector('.phy_chapter-3');

chapter1.addEventListener('click',function(){
    phy_chapter2.classList.add('hidden');
    phy_chapter3.classList.add('hidden');
    phy_chapter1.classList.remove('hidden');
    phyVideos.classList.add('hidden');
});
chapter2.addEventListener('click',function(){
    phy_chapter1.classList.add('hidden');
    phy_chapter3.classList.add('hidden');
    phy_chapter2.classList.remove('hidden');
    phyVideos.classList.add('hidden');
});
chapter3.addEventListener('click',function(){
    phy_chapter1.classList.add('hidden');
    phy_chapter2.classList.add('hidden');
    phy_chapter3.classList.remove('hidden');
    phyVideos.classList.add('hidden');
});

 
//--------------------------displaying videos of physics--------------------------------------------

const showVideos = document.querySelector('.show-videos');
const phyVideos= document.querySelector('.phy_video');

showVideos.addEventListener('click',function(){
    phy_chapter1.classList.add('hidden');
    phy_chapter2.classList.add('hidden');
    phy_chapter3.classList.add('hidden');
    phyVideos.classList.remove('hidden');
})
