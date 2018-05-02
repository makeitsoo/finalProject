import React from 'react';

export default class LogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: 'back extension',
      weight: '25',
      reps: '8'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    console.log(this.state);
    const target = event.target,
          value = target.value,
          name = target.name;

    console.log(target);
    console.log(value);
    console.log(name);

    this.setState({
      [name]: value
    });

  }

  handleSubmit(event) {
    alert(
      'Your exercise: ' + this.state.exercise +
      ' | Your weight: ' + this.state.weight +
      ' | Your reps: ' + this.state.reps);
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>
          Exercise:
          <select
            name="exercise"
            value={this.state.exercise}
            onChange={this.handleInputChange}>
            <option value="back extension">back extension</option>
            <option value="bench press">bench press</option>
            <option value="bicep curls">bicep curls</option>
            <option value="calf raise">calf raise</option>
            <option value="chest fly">chest fly</option>
            <option value="deadlift">deadlift</option>
            <option value="good morning">good-morning</option>
            <option value="lat pulldown">lat pulldown</option>
            <option value="leg curl">leg curl</option>
            <option value="leg extension">leg extension</option>
            <option value="leg press">leg press</option>
            <option value="lunge">lunge</option>
            <option value="military press">military press</option>
            <option value="pull up">pull up</option>
            <option value="pushup">pushup</option>
            <option value="row">row</option>
            <option value="shoulder fly">shoulder fly</option>
            <option value="shoulder press">shoulder press</option>
            <option value="shoulder shrug">shoulder shrug</option>
            <option value="situp">situp</option>
            <option value="squat">squat</option>
            <option value="stomach crunch">stomach crunch</option>
            <option value="torso rotation">torso rotation</option>
            <option value="tricep extension">tricep extension</option>
            <option value="tricep pushdown">tricep pushdown</option>
            <option value="wrist curls">wrist curls</option>
          </select>
        </label>

        <label>
          Weight:
          <select
            name="weight"
            value={this.state.weight}
            onChange={this.handleInputChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
            <option value="60">60</option>
            <option value="65">65</option>
            <option value="70">70</option>
            <option value="75">75</option>
            <option value="80">80</option>
            <option value="85">85</option>
            <option value="90">90</option>
            <option value="95">95</option>
            <option value="100">100</option>
            <option value="105">105</option>
            <option value="110">110</option>
            <option value="115">115</option>
            <option value="120">120</option>
            <option value="125">125</option>
            <option value="130">130</option>
            <option value="135">135</option>
            <option value="140">140</option>
            <option value="145">145</option>
            <option value="150">150</option>
            <option value="155">155</option>
            <option value="160">160</option>
            <option value="165">165</option>
            <option value="170">170</option>
            <option value="175">175</option>
            <option value="180">180</option>
            <option value="185">185</option>
            <option value="190">190</option>
            <option value="195">195</option>
            <option value="200">200</option>
            <option value="205">205</option>
            <option value="210">210</option>
            <option value="215">215</option>
            <option value="220">220</option>
            <option value="225">225</option>
            <option value="230">230</option>
            <option value="235">235</option>
            <option value="240">240</option>
            <option value="245">245</option>
            <option value="250">250</option>
            <option value="255">255</option>
            <option value="260">260</option>
            <option value="265">265</option>
            <option value="270">270</option>
            <option value="275">275</option>
            <option value="280">280</option>
            <option value="285">285</option>
            <option value="290">290</option>
            <option value="255">255</option>
            <option value="260">260</option>
            <option value="265">265</option>
            <option value="270">270</option>
            <option value="275">275</option>
            <option value="280">280</option>
            <option value="285">285</option>
            <option value="290">290</option>
            <option value="295">295</option>
            <option value="300">300</option>
            <option value="305">305</option>
            <option value="310">310</option>
            <option value="315">315</option>
            <option value="320">320</option>
            <option value="325">325</option>
            <option value="330">330</option>
            <option value="335">335</option>
            <option value="340">340</option>
            <option value="345">345</option>
            <option value="350">350</option>
            <option value="355">355</option>
            <option value="360">360</option>
            <option value="365">365</option>
            <option value="370">370</option>
            <option value="375">375</option>
            <option value="380">380</option>
            <option value="385">385</option>
            <option value="390">390</option>
            <option value="395">395</option>
            <option value="400">400</option>
            <option value="405">405</option>
            <option value="410">410</option>
            <option value="415">415</option>
            <option value="420">420</option>
            <option value="425">425</option>
            <option value="430">430</option>
            <option value="435">435</option>
            <option value="440">440</option>
            <option value="445">445</option>
            <option value="450">450</option>
            <option value="455">455</option>
            <option value="460">460</option>
            <option value="465">465</option>
            <option value="470">470</option>
            <option value="475">475</option>
            <option value="480">480</option>
            <option value="485">485</option>
            <option value="490">490</option>
            <option value="495">495</option>
            <option value="500">500</option>
          </select>
        </label>

        <label>
          Reps:
          <select
            name="reps"
            value={this.state.reps}
            onChange={this.handleInputChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

