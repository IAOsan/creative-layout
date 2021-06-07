class UI {
   constructor() {
      this.teamGrid = document.querySelector('.team__grid');
   }

   showStory() {
      this.teamGrid.addEventListener('click', e => {
         if (e.target.classList.contains('story__btn')) {
            let btn = e.target,
               story = btn.nextElementSibling;
            btn.classList.toggle('story__btn--change');
            story.classList.toggle('story--change');
         }
      });
   }
}

window.addEventListener('DOMContentLoaded', () => {
   const ui = new UI();
   // story
   ui.showStory();
});
