/// <reference types="cypress" />

context("Youtube Embedded Video tracking", () => {
    beforeEach(() => {
        cy.smartIntercept();
        cy.interceptMediaRequests();
    });

    it("zero config activate, play, pos, pause, seek, eof", () => {
        cy.visit("/apps/html/youtube");
        cy.contains("Smartpixel Youtube Test page");
        cy.wait("@trackRequest");
        cy.wait(3000);
        cy.get("#activate").click();
        cy.window().then((win) => {
            expect(win.wtSmart.extension.youtube.__v.length).to.equal(3);
        });
        cy.wait(3000);
        cy.contains("Player 1 play").click();
        cy.waitForParsedRequest("@playTrackRequest").then((req) => {
            console.log("PLAY", req);
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("play");
            expect(req.mt1).to.equal("0");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
        });
        cy.waitForParsedRequest("@posTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("pos");
            const posMt1 = Number(req.mt1);
            expect(posMt1).to.be.lessThan(5);
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("POS", req);
        });
        cy.contains("Player 1 pause").click();
        cy.waitForParsedRequest("@pauseTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("pause");
            expect(req.mt1).to.equal("1");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("PAUSE", req);
        });
        cy.get("#end0").click();
        cy.wait(500);
        cy.get("#play0").click();
        cy.waitForParsedRequest("@seekTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("seek");
            expect(req.mt1).to.equal("1");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("SEEK", req);
        });
        cy.waitForParsedRequest("@playTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("play");
            expect(req.mt1).to.equal("84");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("PLAY", req);
        });
        cy.waitForParsedRequest("@eofTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("eof");
            expect(req.mt1).to.equal("87");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("EOF", req);
        });
    });

    it("attribute config activate, play, pos, pause, seek", () => {
        cy.visit("/apps/html/youtube");
        cy.contains("Smartpixel Youtube Test page");
        cy.wait("@trackRequest");
        cy.wait(3000);
        cy.get("#activate").click();
        cy.window().then((win) => {
            expect(win.wtSmart.extension.youtube.__v.length).to.equal(3);
        });
        cy.wait(3000);
        cy.contains("Player 2 play").click();
        cy.waitForParsedRequest("@playTrackRequest").then((req) => {
            console.log("PLAY", req);
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Test mi attribute title");
            expect(req.mk).to.equal("play");
            expect(req.mt1).to.equal("2");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            expect(req.mg1).to.equal("test media category 1");
            expect(req.mg55).to.equal("test media category 55");
        });
        cy.waitForParsedRequest("@posTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Test mi attribute title");
            expect(req.mk).to.equal("pos");
            const posMt1 = Number(req.mt1);
            expect(posMt1).to.be.lessThan(5);
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("POS", req);
        });
        cy.contains("Player 2 pause").click();
        cy.waitForParsedRequest("@pauseTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Test mi attribute title");
            expect(req.mk).to.equal("pause");
            expect(req.mt1).to.equal("3");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("PAUSE", req);
        });
        cy.get("#search1").click();
        cy.wait(500);
        cy.get("#play1").click();
        cy.waitForParsedRequest("@seekTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Test mi attribute title");
            expect(req.mk).to.equal("seek");
            expect(req.mt1).to.equal("3");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("SEEK", req);
        });
        cy.waitForParsedRequest("@playTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Test mi attribute title");
            expect(req.mk).to.equal("play");
            expect(req.mt1).to.equal("45");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("PLAY", req);
        });
    });

    it("dynamic config activate, play, pos, pause, seek", () => {
        cy.visit("/apps/html/youtube");
        cy.contains("Smartpixel Youtube Test page");
        cy.wait("@trackRequest");
        cy.wait(3000);
        cy.get("#activate_with_dynamic_config").click();
        cy.window().then((win) => {
            expect(win.wtSmart.extension.youtube.__v.length).to.equal(3);
        });
        cy.wait(3000);
        cy.contains("Player 1 play").click();
        cy.waitForParsedRequest("@playTrackRequest").then((req) => {
            console.log("PLAY", req);
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp video 1 dynamic title");
            expect(req.mk).to.equal("play");
            expect(req.mt1).to.equal("0");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            expect(req.mg1).to.equal("Short videos");
        });
        cy.waitForParsedRequest("@posTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp video 1 dynamic title");
            expect(req.mk).to.equal("pos");
            expect(req.mt1).to.be.oneOf(["0", "1", "2"]);
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("POS", req);
        });
        cy.contains("Player 1 pause").click();
        cy.waitForParsedRequest("@pauseTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp video 1 dynamic title");
            expect(req.mk).to.equal("pause");
            expect(req.mt1).to.be.oneOf(["0", "1", "2"]);
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("PAUSE", req);
        });
        cy.get("#search0").click();
        cy.wait(500);
        cy.get("#play0").click();
        cy.waitForParsedRequest("@seekTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp video 1 dynamic title");
            expect(req.mk).to.equal("seek");
            expect(req.mt1).to.be.oneOf(["0", "1", "2"]);
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("SEEK", req);
        });
        cy.waitForParsedRequest("@playTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp video 1 dynamic title");
            expect(req.mk).to.equal("play");
            expect(req.mt1).to.equal("45");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            console.log("PLAY", req);
        });
        cy.contains("Player 1 pause").click();
        cy.waitForParsedRequest("@pauseTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp video 1 dynamic title");
            expect(req.mk).to.equal("pause");
            expect(req.mt1).to.be.oneOf(["45", "46"]);
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            expect(req.ck1).to.equal("Paused later than 3 seconds");
            console.log("PAUSE", req);
        });

        // test default title
        cy.contains("Player 3 play").click();
        cy.waitForParsedRequest("@playTrackRequest").then((req) => {
            console.log("PLAY", req);
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal(
                "Collect, Analyze and Activate Your Data With Mapp Intelligence"
            );
            expect(req.mk).to.equal("play");
            expect(req.mt1).to.equal("0");
            expect(req.mt2).to.equal("132");
            expect(req.vol).to.equal("100");
            expect(req.mg1).to.equal("Long videos");
        });
        cy.waitForParsedRequest("@posTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal(
                "Collect, Analyze and Activate Your Data With Mapp Intelligence"
            );
            expect(req.mk).to.equal("pos");
            expect(req.mt1).to.be.oneOf(["0", "1", "2"]);
            expect(req.mt2).to.equal("132");
            expect(req.vol).to.equal("100");
            console.log("POS", req);
        });
        cy.contains("Player 3 pause").click();
        cy.waitForParsedRequest("@pauseTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal(
                "Collect, Analyze and Activate Your Data With Mapp Intelligence"
            );
            expect(req.mk).to.equal("pause");
            expect(req.mt1).to.be.oneOf(["0", "1", "2"]);
            expect(req.mt2).to.equal("132");
            expect(req.vol).to.equal("100");
            console.log("PAUSE", req);
        });
    });

    it("mute and volume", () => {
        cy.visit("/apps/html/youtube");
        cy.contains("Smartpixel Youtube Test page");
        cy.wait("@trackRequest");
        cy.wait(3000);
        cy.get("#activate").click();
        cy.window().then((win) => {
            expect(win.wtSmart.extension.youtube.__v.length).to.equal(3);
        });
        cy.wait(3000);
        cy.get("#lowvolume0").click();
        cy.contains("Player 1 play").click();
        cy.waitForParsedRequest("@playTrackRequest").then((req) => {
            console.log("PLAY", req);
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("play");
            expect(req.mt1).to.equal("0");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("20");
            expect(req.mut).to.not.exist;
        });
        cy.waitForParsedRequest("@posTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("pos");
            const posMt1 = Number(req.mt1);
            expect(posMt1).to.be.lessThan(5);
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("20");
            expect(req.mut).to.not.exist;
            console.log("POS", req);
        });
        cy.get("#mute0").click();
        cy.contains("Player 1 pause").click();
        cy.waitForParsedRequest("@pauseTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("pause");
            expect(req.mt1).to.be.oneOf(["0", "1", "2"]);
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("20");
            expect(req.mut).to.equal("1");
            console.log("PAUSE", req);
        });
    });

    it("install", () => {
        cy.visit("/apps/html/youtube");
        cy.contains("Smartpixel Youtube Test page");
        cy.wait("@trackRequest");
        cy.wait(3000);
        cy.get("#activate").click();
        cy.window().then((win) => {
            expect(win.wtSmart.extension.youtube.__v.length).to.equal(3);
        });
        cy.wait(3000);
        cy.get("#remove_iframe_2").click();
        cy.wait(1000);
        cy.get("#install").click();
        cy.window().then((win) => {
            expect(win.wtSmart.extension.youtube.__v[1]).to.be.null;
        });
    });

    it("deactivate", () => {
        cy.visit("/apps/html/youtube");
        cy.contains("Smartpixel Youtube Test page");
        cy.wait("@trackRequest");
        cy.wait(3000);
        cy.get("#activate").click();
        cy.window().then((win) => {
            expect(win.wtSmart.extension.youtube.__v.length).to.equal(3);
        });
        cy.wait(3000);
        cy.contains("Player 1 play").click();
        cy.waitForParsedRequest("@playTrackRequest").then((req) => {
            console.log("PLAY", req);
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("play");
            expect(req.mt1).to.equal("0");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            expect(req.mut).to.not.exist;
        });
        cy.waitForParsedRequest("@posTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("pos");
            const posMt1 = Number(req.mt1);
            expect(posMt1).to.be.lessThan(5);
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            expect(req.mut).to.not.exist;
            console.log("POS", req);
        });
        cy.get("#deactivate").click();
        cy.contains("Player 1 pause").click();
        cy.wait(3000);
        cy.get("@pauseTrackRequest.all").then((interceptions) => {
            expect(interceptions).to.have.length(0);
        });
    });

    it("update config", () => {
        cy.visit("/apps/html/youtube");
        cy.contains("Smartpixel Youtube Test page");
        cy.wait("@trackRequest");
        cy.wait(3000);
        cy.get("#activate").click();
        cy.window().then((win) => {
            expect(win.wtSmart.extension.youtube.__v.length).to.equal(3);
        });
        cy.wait(3000);
        cy.contains("Player 1 play").click();
        cy.waitForParsedRequest("@playTrackRequest").then((req) => {
            console.log("PLAY", req);
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("play");
            expect(req.mt1).to.equal("0");
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            expect(req.mut).to.not.exist;
            expect(req.ck1).to.not.exist;
        });
        cy.waitForParsedRequest("@posTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("pos");
            const posMt1 = Number(req.mt1);
            expect(posMt1).to.be.lessThan(5);
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            expect(req.mut).to.not.exist;
            expect(req.ck1).to.not.exist;
            console.log("POS", req);
        });
        cy.get("#update").click();
        cy.contains("Player 1 pause").click();
        cy.waitForParsedRequest("@pauseTrackRequest").then((req) => {
            expect(req.pp).to.equal("1");
            expect(req.mi).to.equal("Mapp Cloud: Campaign Dashboards");
            expect(req.mk).to.equal("pause");
            expect(req.mt1).to.be.oneOf(["0", "1", "2"]);
            expect(req.mt2).to.equal("87");
            expect(req.vol).to.equal("100");
            expect(req.ck1).to.equal("added via update method");
            console.log("PAUSE", req);
        });
    });

});
