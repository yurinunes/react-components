import styled from "styled-components";

export const Header = styled.div`
  padding: 1.25rem 1.5rem;
  
  //.dropdown:hover .dropdown-menu {
  //  display: block;
  //}
 
 
 @media (max-width: 768px) { 
 
 .nav-header {
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  
  .navbar-brand {
   display: block;
   margin-right: auto;
  }    
 }
 
 .navbar-collapse {
    width: 100%;
    text-align: left;
    transition: height 0.25s cubic-bezier(0.6, -0.28, 1, 0.58) 0s;
    
    .ml-auto {
      margin-left: unset!important;
    }
 }
 
 .navbar-expand {
    flex-direction: column;
}
  
  .navbar-expand .navbar-nav {
   flex-direction: column; 
}

  .collapse:not(.show) {
      display: none!important;
  }
  .navbar-expand .navbar-toggler {
     display: block;
    }
  } 
 
`;
