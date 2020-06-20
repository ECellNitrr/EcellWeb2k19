import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './timeline.css'


class Timeline extends React.Component {
    constructor() {
      super();
      this.state = {
        currentIndex: 0,
        items: [2019,2018,2017,2016,2015,2014,2013,2012,2011,2010],
        texts:[
          "With the collective efforts of our seniors, Sameer Shekhar(Founder and core member) Rahul Babu(Founder and Core member), Deepak Sharma(Core member), Vikas Singh(Core member), was laid the foundation stone of E-Cell. The committee initially began with a team of 40 members. Their very first initiative as the committee came into force, was the launch of magazine foe which Mr. Nagesh Banchhor, the owner of RK Mall, Mr. Vinay Paremesarem, founder of Mysore walks, Mr. Nitin Gupta, comedian, were interviewed. E-week was organized which consisted of E-Quiz, E-talks and B-Plan, back then.",
          "E-Cell organized the “Counselling Quiz”, one-of-a-kind counselling session where a student was required to give a test. Based on one’s interest and aptitude, a profession suitable for him/her could be predicted. This was followed by counselling by our seniors who counselled the students and gave them life worthy guidance and advice. This event was a huge success.The motto of the event was to give the 360 degree know-how of one's career based on his/her aptitude by sharing minutest of particulars that they need to possess inorder to suvive in the field and prosper in it.",
          "The very beginning of E-Cell started with the Annual Business Plan event, “B-Plan” that invited executive summaries. This year saw the 1st Annual Entrepreneurship Summit, the inception of flagship events of E-Cell as a part of Eclectika 2012. ACME- The Engineer’s Day events- consisting of Group Discussion based on Technical, Business, Current Affairs followed by Personal Interview.",
          "Entrepreneurship Development Program – was started in 2013 by NIESBUD under the Ministry Of MSME. A 6-day E-learning module followed by Test, workshop and orientation, an initiative to inculcate entrepreneurial, managerial and leadership skills among students. A good opportunity for students who wish to own a start-up, who wants to work in the management sector, who wish to become entrepreneurs. Workshops and orientations were a cardinal part of it.  ",
          "The B-Plan competition was organized by E-Cell as a part of Eclectika’14. Not only this, but the inception of first ever Wallstreet happened. This amazing series of competetions included “HR Sutra” which included aptitude round to test one’s technical skills and GDPI for enhancing the soft skills.The Case-D-Studio, to give a glimpse of management level crises to a technical level issue. Also the Cricnometrica, to give one a feel of IPL auction where you need to “BID FOR THE BEST”.E-Cell also organized it’s flagship events in Aavartan’14 – Techno-Management Fest.",
          "The session began with E-Cell organizing it’s first event which was ‘INNOVATION YATRA’. An exclusive speaker session by Mr. Vikas Rajput, entrepreneurship mentor, Goldman Sachs-NEN certified, in collaboration with Lemon School of Entrepreneurship. Followed by the Engineer’s Day Celebration. E-Summit 2015 as a part of Aavartan’15, brought with it much more innovative and riveting events such as Cluedo, Ad-o-holic and more.",
          "In association with E-Cell, MSME – Development Institute Raipur, organized the One-Day awareness programme on “Support for entrepreneurial and managerial development of SMEs through Incubators”. An informative and interactive workshop on “Preparing Details Project Report” was organized with the aim to provide direction to the budding entrepreneurs. With the E-Cell progressing by leaps and bounds, was successful in establishing a benchmark in the legacy of it’s existence, as the E-Summit 2016 was organized as an independent Summit by the E-Cell.",
          
        ],
      };
    }

    slideTo = (i) => this.setState({ currentIndex: i});

    onSlideChanged = (e) => this.setState({ currentIndex: e.item,  });

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

    active = (i,item) => {
      if(this.state.currentIndex == i)
      {
        return <p style={{cursor:"pointer"}} className="btn btn-lg btn-green">{item}</p>
      }
      else {
        return <p style={{cursor:"pointer"}} className="btn btn-sm btn-black">{item}</p>
      }
    }

    renderThumbs = () =>
    <div style={{display:"flex",justifyContent:"center"}}>
    {/*<button className="btn-primary" onClick={() => this.slidePrev()}>&lt;</button>*/}
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>{this.state.items.map((item, i) =>
        <div style={{padding:"1em"}} key={i} onClick={() => this.slideTo(i)}>
        {this.active(i,item)}
        </div>
        )}
      </div>
      {/*<button className="btn-primary" onClick={() => this.slideNext()}>&gt;</button>*/}
    </div>

    renderGallery() {
      const { currentIndex, texts } = this.state;

      return (<AliceCarousel
        dotsDisabled={true}
        buttonsDisabled={true}
        autoPlay={true}
        autoPlayInterval="15000"
        fadeOutAnimation={true}
        slideToIndex={currentIndex}
        onSlideChanged={this.onSlideChanged}
      >
      <iframe src='https://www.youtube.com/embed/ExvQjqodVfg'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        height="300em"
        width="50%"
        style={{margin:"2em"}}
        className="vid"
/>
<iframe src='https://www.youtube.com/embed/wmHhRVO9nDU' 
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        height="300em"
        width="50%"
        style={{margin:"2em"}}
        className="vid"
/>
<iframe src='https://www.youtube.com/embed/QcN-2VPvPzc' 
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        height="300em"
        width="50%"
        style={{margin:"2em"}}
        className="vid"
/>

<h2 className="slide text-center" style={{paddingLeft:"10em",paddingRight:"10em",paddingTop:"4em",fontSize:"1.5em" }} >{this.state.texts[6]}</h2>
<h2 className="slide text-center"  style={{paddingLeft:"10em",paddingRight:"10em",paddingTop:"6em",fontSize:"1.5em"}}>{this.state.texts[5]}</h2>
<h2 className="slide text-center"  style={{paddingLeft:"10em",paddingRight:"10em",paddingTop:"6em",fontSize:"1.5em"}}>{this.state.texts[4]}</h2>
<h2 className="slide text-center"  style={{paddingLeft:"10em",paddingRight:"10em",paddingTop:"6em",fontSize:"1.5em"}}>{this.state.texts[3]}</h2>
<h2 className="slide text-center"  style={{paddingLeft:"10em",paddingRight:"10em",paddingTop:"4em",fontSize:"1.5em"}}>{this.state.texts[2]}</h2>
<h2 className="slide text-center"  style={{paddingLeft:"10em",paddingRight:"10em",paddingTop:"4em",fontSize:"1.5em"}}>{this.state.texts[1]}</h2>
<h2 className="slide text-center"  style={{paddingLeft:"10em",paddingRight:"10em",paddingTop:"4em",fontSize:"1.5em"}}>{this.state.texts[0]}</h2>
 
      </AliceCarousel>);
    }

    render() {
      return (
        <div class="timeline" style={{marginTop:"4em", marginBottom:"0.5em"}}>
          <h3 class="text-center" style={{fontWeight:"bold",fontSize:"2em",padding:"1em"}}>Timeline of The Entrepreneurship Cell, NIT Raipur</h3>
          { this.renderThumbs() }

          <div class ="text-center" style={{margin:"auto",padding:"1em 0"}}>{ this.renderGallery() }</div>
        </div>
      );
    }
}
export default Timeline;