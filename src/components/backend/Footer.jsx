import React from "react";

function Footer() {
  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-2 mb-md-0">
          © {new Date().getFullYear()} , made with ❤️ by
          <a href="#" className="footer-link fw-bolder">
            ThemeSelection, Developed By Manoj
          </a>
        </div>
        <div>
          <a
            href="https://themeselection.com/license/"
            className="footer-link me-4"
          >
            License
          </a>
          <a href="https://themeselection.com/" className="footer-link me-4">
            More Themes
          </a>

          <a
            href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
            className="footer-link me-4"
          >
            Documentation
          </a>

          <a
            href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
            className="footer-link me-4"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
