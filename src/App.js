import React, { Fragment, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GuestInfo from "./components/Page2/GuestInfo";
import Reservation from "./components/Reservation";
import SearchBar from "./components/SearchBar";
import TabSwitcher from "./components/TabSwitcher";
import BookingInfo from "./components/Page3/BookingInfo";
import FooterFinal from "./components/Page3/FooterFinal";

const App = (props) => {
  const [page, setPage] = useState(true);
  const [page1, setPage1] = useState(false);
  const [page2, setPage2] = useState(false);
  const [BookingPage, setBookingPage] = useState(false);
  const [tabChanger, setTabChanger] = useState(false);
  const [reservationChanger, setReservationChanger] = useState(false);

  const GuestClickedHandler = (props) => {
    setPage(props);
    setPage1(!props);
    setPage2(!props);
  };
  const GuestClickedHandler1 = (props) => {
    setPage(props);
    setPage2(!props);
  };

  const BackedPageHandler = (props) => {
    setPage(props);
    setPage2(!props);
  };
  const ForwardPageHandler = (props) => {
    setBookingPage(!props);
    setPage2(props);
    setTabChanger(!props);
  };
  const TabChangeHandler = (props) => {
    setPage2(props);
    setBookingPage(!props);
    setTabChanger(!props);
  };
  const PreviousPagedHandler = (props) => {
    setBookingPage(!props);
    setPage2(props);
  };

  const ReservationCreatedHandler = () => {
    setReservationChanger(props);
  };

  return (
    <Fragment>
      <Navbar />
      <Reservation />
      <TabSwitcher
        BookingVal={tabChanger}
        tabChanger={TabChangeHandler}
        tabChanger2={ForwardPageHandler}
      />
      {page ? (
        <SearchBar guest={GuestClickedHandler} guest1={GuestClickedHandler1} />
      ) : null}
      {page2 ? <GuestInfo guestName={page1} /> : null}
      {page2 ? (
        <Footer footerB={BackedPageHandler} footerF={ForwardPageHandler} />
      ) : null}
      {BookingPage ? (
        <BookingInfo transfer={ReservationCreatedHandler} />
      ) : null}
      {BookingPage ? (
        <FooterFinal
          createdReserv={reservationChanger}
          prevPage={PreviousPagedHandler}
        />
      ) : null}
    </Fragment>
  );
};

export default App;
