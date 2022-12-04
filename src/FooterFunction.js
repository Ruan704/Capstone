// // import React from 'react'
// // export default 
// function carousel(){
//     // return(
//     //     <>
//          let carousel_slider = document.querySelector(",");
//          let list = document.querySelector("[id='.carousel_list']");
//          let item = document.querySelectorAll(".carousel_item");
//          let list2;
//          const speed = 1;
//          const width = list.offsetwidth;
//          let x = 0;
//          let x2 = width;
//          function clone (){
//             list = list.cloneNode(true);
//             carousel_slider.appendChild(list);
//             list2.style.left = `${width}px`;
//          }
//         function moveFirst(){
//             x == speed;
//             if(width >= Math.abs(x)){
//                 list.style.left = `${x}px`
//             }else{
//                 x = width
//             }
//         }
//         function moveSecond(){
//             x2 -= speed
//             if(list2.offsetwidth >= Math.abs(x2)){
//                 list2.style.left = `${x2} px`;
//             }else{
//                 x2 = width;
//             }
//         }
   
//         clone();

//         let a = setInterval(moveFist, 10);
//         let b = setInterval (moveSecond,10);

// }
// carousel();


// import React from 'react';

// import SlidesShowStore   from '../stores/SlidesShowStore';
// import SlidesShowActions from '../actions/SlidesShowActions';
// import Slides from '../components/Slides';

// class SlidesShow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = SlidesShowStore.getState();
//     this.onChange = this.onChange.bind(this);
//     this.IMAGES = [];
//   }

//   componentDidMount() {
//     SlidesShowStore.listen(this.onChange);
//     this.tick();
//     SlidesShowActions.startTimer();
//     this.handleChange();
//   }

//   componentWillUnmount() {
//     SlidesShowStore.unlisten(this.onChange);
//   }

//   onChange(state) {
//     this.setState(state);
//   }

//   handleChange() {
//     this.setState(SlidesShowStore.getState());
//   }

//   toggleNext( event) {
//     event.preventDefault();
//     var current = this.state.currentSlide;
//     var next = current + 1;
//     if (next > this.IMAGES.length - 1) {
//       next = 0;
//     }
//     this.setState( {currentSlide: next} );
//   }

//   togglePrev(event) {
//     event.preventDefault();   
//     var current = this.state.currentSlide;
//     var prev = current - 1;
//     if (prev < 0) {
//       prev = this.IMAGES.length - 1;
//     }
//     this.setState( {currentSlide: prev} );  
//   }   

//   toggleSlide(id) {
//     var index = this.IMAGES.map(function (el) {
//       return (
//         el.id
//       );
//     });
//     var currentIndex = index.indexOf(id);       
//     this.setState( {currentSlide: currentIndex} );
//   }

//   Next() {
//     var current = this.state.currentSlide;
//     var next = current + 1;
//     if (next > this.IMAGES.length - 1) {
//       next = 0;
//     }
//     this.setState( {currentSlide: next} );
//   }

//   tick() {
//     var self = this;
//     this.interval = setTimeout(function() {
//       if (self.state.status === 'stop') {
//         self.interval = undefined;
//         return;
//       }
//       if (self.state.timeLeft <= 0) {
//         SlidesShowActions.timeout();
//       } else {
//         SlidesShowActions.tick();
//         self.Next();
//       }
//       self.tick();
//     }, 1000);
//   }

//   handleClickStart(event) {
//     event.preventDefault();  
//     this.tick();
//     SlidesShowActions.startTimer();
//     this.handleChange();
//   }

//   handleClickStop(event) {
//     event.preventDefault(); 
//     SlidesShowActions.stopTimer();
//     this.handleChange();
//   }

//   handleClickReset(event) {
//     event.preventDefault();  
//     SlidesShowActions.resetTimer();
//   }

//   render() {
//     this.IMAGES = [
//      {id: "slide1", imagePath : "/img/img1.jpg", imageAlt : "Slide 1 Image", title : "Slide 1", subtitle : "Slide 1 Image SubTitle", text : "Slide 1 Image Text", action : "Slide 1 Image Action", actionHref : "href"  },
//      {id: "slide2", imagePath : "/img/img2.jpg", imageAlt : "Slide 2 Image", title : "Slide 2", subtitle : "Slide 2 Image SubTitle", text : "Slide 2 Image Text", action : "Slide 2 Image Action", actionHref : "href"  },
//      {id: "slide3", imagePath : "/img/img3.jpg", imageAlt : "Slide 3 Image", title : "Slide 3", subtitle : "Slide 3 Image SubTitle", text : "Slide 3 Image Text", action : "Slide 3 Image Action", actionHref : "href"  }
//     ];

//     var self = this;
//     var paginationNodes = this.IMAGES.map(function (paginationNode, i) {
//       var boundClick = self.toggleSlide.bind(self, paginationNode.id);
//       return (
//         <span className="pager" onClick={boundClick}>  key={paginationNode.Title}  </span>
//       );
//      });

//    return (  
//     <div className="container">
//       <div className="slideshow">
//         <link rel="stylesheet" href="css/styles.css" />
//         <Slides data={this.IMAGES} currentSlide={this.state.currentSlide} />
//         <div className="pagination">{paginationNodes}</div>
//         <div className="toggle toggle--prev" onClick={this.togglePrev.bind(this)}>Prev</div>
//         <div className="toggle toggle--next" onClick={this.toggleNext.bind(this)}>Next</div>    
//         <button onClick={this.handleClickStart.bind(this)}>Start</button>
//         <button onClick={this.handleClickStop.bind(this)}>Stop</button>
//         <button onClick={this.handleClickReset.bind(this)}>Reset</button>   
//        </div>
//     </div>
//     );
//   }
// }

// export default SlidesShow;