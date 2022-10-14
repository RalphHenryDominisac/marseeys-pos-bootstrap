import React from 'react';
import SideNavBar from "../bootstrapComponents/SideNavBar";

export default function PendingPage() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavBar />
        <main className="col ps-md-2 pt-2">
          <div className="page-header pt-3">
            <h2>PENDING ORDERS</h2>
          </div>
          <p className="lead">
            -----------------------------------------------------------
          </p>
          {/* <hr> */}
          <div className="row">
            <div className="col-12">
              <p>
                Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies.
                Banh mi McSweeney's Shoreditch selfies, forage fingerstache food
                truck occupy YOLO Pitchfork fixie iPhone fanny pack art party
              </p>
              <p>
                Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street
                art Carles, stumptown gluten-free Kickstarter artisan Wes
                Anderson wolf pug. Godard sustainable you probably haven't heard
                of them, vegan farm-to-table Williamsburg slow-carb readymade
                disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche
                American Apparel whatever. Helvetica cray plaid, vegan brunch
                Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies.
                Banh mi McSweeney's Shoreditch selfies, forage fingerstache food
                truck occupy YOLO Pitchfork fixie iPhone fanny pack art party
                Portland.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
