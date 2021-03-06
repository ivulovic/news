import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
  * {
    padding: 0px;
    margin: 0px;
    font-family: 'Open Sans', sans-serif;
    outline:none;
    border:none;
  }
  .text-center{
    text-align:center;
  }
  .content{
    width: 102%;
    max-height: 100vh;
    position: fixed;
  }
  .svg-jigsaw{
    /*width: 500px; */
    height: 1600px;
    position: absolute;
    left: 0px;
    top: 0px;
    transform: rotate(180deg);
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
  }
  .nav-item{
    display:inline-block;
    margin-right:10px;
    text-transform:uppercase;
    font-size:13px;
  }
  
  .nav-list .nav-item:last-child{
    margin-right:0px
  }
  .nav-link{
    display:block;
    padding:5px;
    transition: all 0.5s;
    color: #1d1d1b;
    text-decoration:none;
  }
  .nav-link-active{
    background: #1d1d1b;;
    color:white;
  }
  .dark-select-wrapper{
    background: #1d1d1b;
    padding: 5px;
    display:inline-block;   
     margin: 10px;
  }
  .dark-select{
    background: #1d1d1b;
    color: white;
    font-weight: 600;
    padding: 5px;
    display: inline-block;
    /* height: 35px; */
    width: 115px;
    outline: none;
    text-transform:uppercase;
    border: 0 !important;.  /*Removes border*/
   -webkit-appearance: none;  /*Removes default chrome and safari style*/
   -moz-appearance: none;  /*Removes default style Firefox*/
   text-align:center;
  }
  .dark-option{
    display:block;
    font-weight:600;
    margin:5px;
    text-transform:capitalize;
  }
  .logo-image{
    max-width: 100%;
    margin: 15px 0px;
    padding: 0px 15px;
  }
  .left-side{
    width:35%;
  } 
  
  .jigsaw-side {
    position: absolute;
    top: 0px;
    left: 0px;
    float:left;
  }
  
  .page-content{
    max-height: 100vh;
    overflow: hidden auto;
    width:100%;
    padding: 0px 25px 0px 200px;
    position: absolute;
    left: 0px;
    top: 0px;
  } 
  .content-side {
    float: left;
    width: 100%;
    background: #1d1d1b;
    height: 100vh;
    color: white; 
    position: relative;
  }
  .dark-content{
    width: 65%;
    float: left;
    postion:relative;
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
    font-size: 13px;
    text-transform:uppercase;
  }
  .header-title{
    font-weight: 300;
    line-height: 40px;
    text-transform:uppercase;
    font-size:20px;
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
    font-size: 14px
  } 
  
  
  .top-space{
    margin-top:15px;
  }
  .separator{
    width:35px;
    height:3px;
    background:#6a241b;/*#2f2f2f*/
    border:none;
    margin: 10px 0px;
  } 
  
  .hand{
    position: absolute;
    bottom: -45px;
    left: 0px;
  }
  .topic{
    max-width: 80%;
    margin: 0 auto;
    margin-bottom: 40px;
   }
  
  
  @media screen and (max-width: 640px) {
    .content{
      width: 100%;
      max-height: auto;
      position: static;
    }
    .left-side, .dark-content, .content-side, .nav-item {
      width: auto;
      padding: 0px;
      height: unset;  
    }
    .nav-item{
      margin-bottom:10px;
    }
    .jigsaw-side, .hand{
      display:none;
    }
    .content-side{
      padding: 0px;
      width: 100%;
    }
    .dark-content{
      width: 100%;
      padding: 0px;
      overflow: unset;
      max-height: unset;
      height: auto;
    }
    .page-content{
      max-height: unset;
      height: auto;
      width: auto;
      overflow: unset;
      padding: 5px 15px;
      margin-left: 0px;
      position:inherit;
    }
    .header-title{
      font-size: 30px;
    } 
    .topic{
      max-width: 100%;
    }
  } 

`;

export default GlobalStyle;
