import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700');

  * {
    padding: 0px;
    margin: 0px;
    font-family: 'Roboto Condensed', sans-serif;
  }
  .content{
    width: 102%;
    max-height: 100vh;
    position: fixed;
  }
  .svg-jigsaw{
    /*width: 500px; */
    height: 1600px;
  }
   .left{
    float:left;
  }
  .right{
    float:right;
  }
  .clear{
    clear:both;
  }
  .nav-list{
    display:block;
    margin: 15px 0px;
  }
  .nav-item{
    display:inline-block;
    float:right;
    margin-right:10px;
  }
  .nav-list .nav-item:first-child{
    margin-right:0px
  }
  .nav-link{
    display:block;
    padding:5px;
    transition: all 0.5s;
    color:  #1d1d1b;
    text-decoration: underline;
  }
  .nav-link-active{
    background: #1d1d1b;;
    color:white;
    text-decoration: none;
  }
  .left-side{
    width:35%;
  }
  .jigsaw-side{
    /*width: 15%;*/
    float: left;
  }
  .content-side{
    float: left;
    width: 75%;
    background: #1d1d1b;
    height: 100vh;
    color: white;
    padding: 15px 50px;
    max-height: 100vh;
    overflow: hidden auto;
  }
  .dark-content{
    width: 65%;
    float: left;
  }
  .right-side{
    height:1600px;
    background: #1d1d1b;
    color:white;
    width:45%;
    text-align:center;
    overflow: hidden auto;
    max-height: 100vh;
    padding: 15px 35px;
  }
  .medium-side{
    width:15%;
  }
  .medium-side svg{
    position:relative;
    right:100px;
    z-index:-1;
  }
  
  .small-header{
    color: #767674;
    margin-top: 12px;
    margin-bottom: 5px;
    text-align: left;
  }
  .header-title{
    font-size: 34px;
    font-weight: 300;
    line-height: 40px;
  }
  .header-wrapper{
    text-align: left;
    margin-bottom: 5px;
  }
  .body-text{
    color: #ccc;
    clear: both;
    text-align: justify;
    line-height: 24px;
  }
  .link-list {
    margin: 0 0 70px -28px;
  }
  .link-list-item {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 12px;
  }
  .link-list-projects {
    display: block;
    float: left;
    line-height: 26px;
    margin-right: 40px;
  }
  .link-list-number {
    color: #787878;
    font-size: 10px;
    font-weight: 400;
    padding-right: 21px;
  }
  .link-url-list {
    display: block;
    float: left;
    line-height: 26px;
    width: 60%;
    text-align:left;
  }
  .link-list-link {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
  .hand{
    position: absolute;
    bottom: -45px;
    left: 0px;
  }

`;

export default GlobalStyle;
