import 'bootstrap/dist/css/bootstrap.min.css'
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import {app, auth} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/List.css"
import "../../css/Dropdown.css"

export function Footer() {
    return (
        <div class="container my-5 mw-100 p-3">
          <footer class="bg-dark text-center text-lg-start text-white">
            <div class="container p-4">
              <div class="row mt-4">
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">See other books</h5>
        
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white"><i class="fas fa-book fa-fw fa-sm me-2"></i>Bestsellers</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white"><i class="fas fa-book fa-fw fa-sm me-2"></i>All books</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white"><i class="fas fa-user-edit fa-fw fa-sm me-2"></i>Our authors</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Execution of the contract</h5>
        
                  <ul class="list-unstyled">
                    <li>
                      <a href="#!" class="text-white"><i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Supply</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white"><i class="fas fa-backspace fa-fw fa-sm me-2"></i>Returns</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white"><i class="far fa-file-alt fa-fw fa-sm me-2"></i>Regulations</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white"><i class="far fa-file-alt fa-fw fa-sm me-2"></i>Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Publishing house</h5>
        
                  <ul class="list-unstyled">
                    <li>
                      <a href="#!" class="text-white">The BookStore</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">123 Street</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">05765 NY</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white"><i class="fas fa-briefcase fa-fw fa-sm me-2"></i>Send us a book</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Write to us</h5>
        
                  <ul class="list-unstyled">
                    <li>
                      <a href="#!" class="text-white"><i class="fas fa-at fa-fw fa-sm me-2"></i>Help in purchasing</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white"><i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Check the order status</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white"><i class="fas fa-envelope fa-fw fa-sm me-2"></i>Join the newsletter</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="text-center p-3" >
              © 2021 Copyright:
              <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
          </footer>
        
        </div>
    )
}
