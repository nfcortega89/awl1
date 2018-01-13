import React, { Component } from "react";
import "../styles/artcamps.css";
import ArtCampCard from "../components/ArtCampCard";
import Pic1 from "../assets/Art Camp Project_01.jpg";
import Pic2 from "../assets/Art Camp Project_13.jpg";
import Pic3 from "../assets/Student Creating Art_03.jpg";
import Pic4 from "../assets/Student Creating Art_02.jpg";
import Pic5 from "../assets/Art Camp Project_09.jpg";
import Pic6 from "../assets/Art Camp Project_08.jpg";
import Pic7 from "../assets/Art Camp Project_07.JPG";
import Pic8 from "../assets/Art Camp Project_14.jpg";
import Pic9 from "../assets/Art Camp Project_04.jpg";
import Pic10 from "../assets/Art Camp Project_12.jpeg";
import Pic11 from "../assets/Art Camp Project_05.jpg";
import Pic12 from "../assets/Art Camp Project_06.jpg";

class ArtCamps extends Component {
  render() {
    return (
      <section className="ArtCamps">
        <div className="artCamps-header">
          <h1 className="artCamps-header__text">Art camps</h1>
        </div>
        <div className="artCamps-body">
          <ArtCampCard
            leftUpperimage={Pic3}
            leftLowerImage={Pic2}
            rightLowerImage={Pic1}
            header="Summer Art Camp"
            body="Learn how to draw fine art and create new crafts everyday. The camp are for 4 days (no camp on Tuesdays). The fun begins at 10am and lasts until 1pm. We will still have afternoon classes during camp weeks. All the supplies are included as well as snacks. The cost is 150 for 4 days. Each art camp is based on availability, and you must reserve your spot with a $50 art camp deposit. Please email or call us for details."
          />
          <ArtCampCard
            leftUpperimage={Pic4}
            leftLowerImage={Pic5}
            rightLowerImage={Pic6}
            header="Winter Art Camps"
            body="Learn how to draw fine art and create new crafts everyday. The camp are for 4 days (no camp on Tuesdays). The fun begins at 10am and lasts until 1pm. We will still have afternoon classes during camp weeks. All the supplies are included as well as snacks. The cost is 150 for 4 days. Each art camp is based on availability, and you must reserve your spot with a $50 art camp deposit. Please email or call us for details."
          />
          <ArtCampCard
            leftUpperimage={Pic7}
            leftLowerImage={Pic8}
            rightLowerImage={Pic9}
            header="Spring Art Camps"
            body="Learn how to draw fine art and create new crafts everyday. The camp are for 4 days (no camp on Tuesdays). The fun begins at 10am and lasts until 1pm. We will still have afternoon classes during camp weeks. All the supplies are included as well as snacks. The cost is 150 for 4 days. Each art camp is based on availability, and you must reserve your spot with a $50 art camp deposit. Please email or call us for details."
          />
          <ArtCampCard
            leftUpperimage={Pic10}
            leftLowerImage={Pic11}
            rightLowerImage={Pic12}
            header="One Day"
            body="Learn how to draw fine art and create new crafts everyday. The camp are for 4 days (no camp on Tuesdays). The fun begins at 10am and lasts until 1pm. We will still have afternoon classes during camp weeks. All the supplies are included as well as snacks. The cost is 150 for 4 days. Each art camp is based on availability, and you must reserve your spot with a $50 art camp deposit. Please email or call us for details."
          />
        </div>
      </section>
    );
  }
}

export default ArtCamps;
