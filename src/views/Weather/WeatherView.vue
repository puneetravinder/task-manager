<template>
    <div class="search">
        <!-- <label for="exampleDataList" class="form-label">Datalist example</label> -->
        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Search by State/City">
    </div>
    <!-- Weather -->
    <div class="container">
        <div class="d-flex flex-row justify-content-center align-items-center">
            <div class="weather__card">
                <div class="d-flex flex-row justify-content-center align-items-center">
                    <div class="p-3">
                        <h2>15&deg;</h2>
                    </div>
                    <div class="p-3">
                        <img src="https://svgur.com/i/oKG.svg">
                    </div>
                    <div class="p-3">
                        <h5>Tuesday, 10 AM</h5>
                        <h3>San Francisco</h3>
                        <span class="weather__description">Mostly Cloudy</span>
                    </div>
                </div>
                <div class="weather__status d-flex flex-row justify-content-center align-items-center mt-3">
                    <div class="p-4 d-flex justify-content-center align-items-center">
                        <img src="https://svgur.com/i/oHw.svg">
                        <span>10%</span>
                    </div>
                    <div class="p-4 d-flex justify-content-center align-items-center">
                        <img src="https://svgur.com/i/oH_.svg">
                        <span>0.53 mB</span>
                    </div>
                    <div class="p-4 d-flex justify-content-center align-items-center">
                        <img src="https://svgur.com/i/oKS.svg">
                        <span>10 km/h</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Weather Forecast -->
    <div class="weather__forecast d-flex flex-row justify-content-center align-items-center mt-3">
        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
            <span>Wed</span>
            <img src="https://svgur.com/i/oJe.svg">
            <span>13&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
            <span>Thu</span>
            <img src="https://svgur.com/i/oKG.svg">
            <span>15&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
            <span>Wed</span>
            <img src="https://svgur.com/i/oKG.svg">
            <span>15&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
            <span>Fri</span>
            <img src="https://svgur.com/i/oJe.svg">
            <span>13&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
            <span>Sat</span>
            <img src="https://svgur.com/i/oJx.svg">
            <span>13&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
            <span>Sun</span>
            <img src="https://svgur.com/i/oJU.svg">
            <span>11&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
            <span>Mon</span>
            <img src="https://svgur.com/i/oJU.svg">
            <span>11&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
            <span>Tue</span>
            <img src="https://svgur.com/i/oJy.svg">
            <span>6&deg;</span>
        </div>
    </div>
</template>

<style>
body {
    background: #fff;
    color: #444;
    font-family: "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0 0 15px 0;
    padding: 0;
    font-family: "Segoe UI", sans-serif;
    font-weight: 700;
}

/*--------------------------------------------------------------
# Weather Card
--------------------------------------------------------------*/
.weather__card {
    width: 800px;
    padding: 20px;
    background-color: #EEEEEE;
    border-radius: 20px;
    color: #3C4048;
}

.weather__card h2 {
    font-size: 120px;
    font-weight: 700;
    color: #3C4048;
    line-height: .8;
}

.weather__card h3 {
    font-size: 40px;
    font-weight: 600;
    line-height: .8;
    color: #3C4048;
}

.weather__card h5 {
    font-size: 20px;
    font-weight: 400;
    line-height: .1;
    color: #9D9D9D;
}

.weather__card img {
    width: 120px;
    height: 120px;
}

.weather__card .weather__description {
    background-color: #fff;
    border-radius: 25px;
    padding: 5px 13px;
    border: 0;
    outline: none;
    color: #7F8487;
    font-size: .956rem;
    font-weight: 400;
}

/*--------------------------------------------------------------
# Weather Status
--------------------------------------------------------------*/
.weather__status img {
    height: 20px;
    width: 20px;
    vertical-align: middle;
}

.weather__status span {
    font-weight: 500;
    color: #3C4048;
    font-size: .9rem;
    padding-left: .5rem;
}

/*--------------------------------------------------------------
# Weather Forecast
--------------------------------------------------------------*/
.weather__forecast img {
    height: 25px;
    width: 25px;
    vertical-align: middle;
}

.weather__forecast span {
    font-weight: 500;
    color: #3C4048;
    font-size: 1rem;
    padding: 5px 10px;
}
</style>