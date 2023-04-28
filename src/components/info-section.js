const InfoSection = () => {
    return (
        <>
            <div>
        <header className="pt2 pb1 align--center">
          <div className="container">
            <p>Welcome to</p>
            <h1 title="Camp Chippewa"><img className="logo" src="/img/logo.svg" alt="Camp Chippewa" /></h1>
          </div>
        </header>
        {/* Body */}
        <main>
          <div className="container">
            {/* Info */}
            <section className="grid-row grid-row--center">
              {/* Cabin */}
              <div className="grid-column span-half pt3 pb3 mobile-m order-1 reveal-on-scroll is-revealing">
                <div className="relative">
                  <img className="info-image relative z2" src="/img/cabin.jpg" alt="Cabin" />
                  <div className="pattern pattern--left-down absolute z1" />
                </div>
              </div>
              <div className="grid-column span-half pt3 pb3 mobile-m order-2">
                <h3>Cabin</h3>
                <p>Illa argumenta propria videamus, cur omnia sint paria peccata. Quamquam te quidem video minime esse deterritum. Beatus sibi videtur esse moriens. In qua quid est boni praeter summam&nbsp;voluptatem.</p>
              </div>
              {/* Teepees */}
              <div className="grid-column span-half pt3 pb3 mobile-m order-4">
                <h3>Teepees</h3>
                <p>A quibus propter discendi cupiditatem videmus ultimas terras esse peragratas. Laelius clamores sofòw ille so lebat Edere compellans gumias ex ordine&nbsp;nostros.</p>
              </div>
              <div className="grid-column span-half pt3 pb3 mobile-m order-3 reveal-on-scroll is-revealing">
                <div className="relative">
                  <img className="info-image relative z2" src="/img/teepee.jpg" alt="Teepee" />
                  <div className="pattern pattern--right-middle absolute z1" />
                </div>
              </div>
              {/* Fishing */}
              <div className="grid-column span-half pt3 pb3 mobile-m order-5 reveal-on-scroll is-revealing">
                <div className="relative">
                  <img className="info-image relative z2" src="/img/fishing.jpg" alt="Fishing" />
                  <div className="pattern pattern--left-up absolute z1" />
                </div>
              </div>
              <div className="grid-column span-half pt3 pb3 mobile-m order-6">
                <h3>Fishing</h3>
                <p>Que Manilium, ab iisque M. Intellegi quidem, ut propter aliam quampiam rem, verbi gratia propter voluptatem, nos amemus; An eum locum libenter invisit&nbsp;ultimas.</p>
              </div>
              {/* Archery */}
              <div className="grid-column span-half pt3 pb3 mobile-m order-8">
                <h3>Archery</h3>
                <p>At ille pellit, qui permulcet sensum voluptate. Quid in isto egregio tuo officio et tanta fide-sic enim existimo-ad corpus refers? Nec vero sum nescius esse utilitatem in&nbsp;historia.</p>
              </div>
              <div className="grid-column span-half pt3 pb3 mobile-m order-7 reveal-on-scroll is-revealing">
                <div className="relative">
                  <img className="info-image relative z2" src="/img/archery.jpg" alt="Archery" />
                  <div className="pattern pattern--right-down absolute z1" />
                </div>
              </div>
              {/* Canoeing */}
              <div className="grid-column span-half pt3 pb3 mobile-m order-9 reveal-on-scroll is-revealing">
                <div className="relative">
                  <img className="info-image relative z2" src="/img/canoeing.jpg" alt="Canoeing" />
                  <div className="pattern pattern--left-middle absolute z1" />
                </div>
              </div>
              <div className="grid-column span-half pt3 pb3 mobile-m order-10">
                <h3>Canoeing</h3>
                <p>Nam si propter voluptatem, quae est ista laus, quae possit e macello peti? Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum&nbsp;anteponebas.</p>
              </div>
            </section>
          </div>
          {/* Pricing */}
          <section className="align--center pt2 pb3">
            <p className="h2">Rent the whole place for $3,670/night.</p>
            <p>Maximum of 40 people.</p>
          </section>
          {/* Contact */}
          <section className="bg--secondary-color pt3 pb3">
            <div className="container">
              <div className="mb2 align--center">
                <h3 className="mb1">Contact us to get started</h3>
                <p>We'll reply when we get back from&nbsp;fishing.</p>
              </div>
              <form>
                <div className="grid-row">
                  <div className="grid-column span-half mt1">
                    <label className="label" htmlFor="name">Name</label>
                    <input className="form-control" id="name" />
                  </div>
                  <div className="grid-column span-half mt1">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="form-control" id="email" type="email" />
                  </div>
                </div>
                <label className="label mt1" htmlFor="dates">Timeline</label>
                <input className="form-control" id="dates" />
                <label className="label mt1" htmlFor="message">Message</label>
                <textarea className="form-control" id="message" defaultValue={""} />
                <div className="align--right mt1">
                  <button className="btn btn--outline">Send</button>
                </div>
              </form>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="pt2 pb2">
          <div className="container align--center">
            <p>W5723 Lake View Chester, CA 96020</p>
            <p>Design by <a href="https://www.papayatemplates.com" className="link">Papaya.</a></p>
            <ul className="no-bullets list--inline mt1">
              <li className="mr1"><a href="https://www.facebook.com" className="link"><img className="icon" src="/img/facebook.svg" alt="Facebook" /></a></li>
              <li className="mr1"><a href="https://www.twitter.com" className="link"><img className="icon" src="/img/twitter.svg" alt="Twitter" /></a></li>
              <li><a href="https://www.instagram.com" className="link"><img className="icon" src="/img/instagram.svg" alt="Instagram" /></a></li>
            </ul>
            <p>© Camp Chippewa</p>
          </div>
        </footer>
      </div>
        </>
    )
}

export default InfoSection;