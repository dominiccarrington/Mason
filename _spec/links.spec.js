import chai from 'chai';
import { convertLine } from "../build.js";
import faker from 'faker';

const { expect } = chai;

describe("URL Link", function () {
    it("URL Works", function() {
        const text = faker.lorem.words(3);
        const url = faker.internet.url();

        const output = convertLine("[" + text + "](" + url + ")", [], 'white');
        
        expect(output).to.have.length(1);

        expect(output[0]).to.have.property('text').and.be.equal(text);
        expect(output[0]).to.have.property('clickEvent').which.has.property('action').and.is.equal('open_url');
        expect(output[0]).to.have.property('clickEvent').which.has.property('value').and.is.equal(url);
    });
    it("URL Shorthand Works", function() {
        const url = faker.internet.url();

        const output = convertLine("[" + url + "]()", [], 'white');
        
        expect(output).to.have.length(1);

        expect(output[0]).to.have.property('text').and.be.equal(url);
        expect(output[0]).to.have.property('clickEvent').which.has.property('action').and.is.equal('open_url');
        expect(output[0]).to.have.property('clickEvent').which.has.property('value').and.is.equal(url);
    });
    it("Run Command Works", function() {
        const text = faker.lorem.words(3);
        const url = "/say " + faker.lorem.words(5);

        const output = convertLine("[" + text + "](" + url + ")", [], 'white');
        
        expect(output).to.have.length(1);

        expect(output[0]).to.have.property('text').and.be.equal(text);
        expect(output[0]).to.have.property('clickEvent').which.has.property('action').and.is.equal('run_command');
        expect(output[0]).to.have.property('clickEvent').which.has.property('value').and.is.equal(url);
    });
    it("Run Command Shorthand Works", function() {
        const url = "/say " + faker.lorem.words(5);

        const output = convertLine("[" + url + "]()", [], 'white');
        
        expect(output).to.have.length(1);

        expect(output[0]).to.have.property('text').and.be.equal(url);
        expect(output[0]).to.have.property('clickEvent').which.has.property('action').and.is.equal('run_command');
        expect(output[0]).to.have.property('clickEvent').which.has.property('value').and.is.equal(url);
    });
    it("Open Page Works", function() {
        const text = faker.lorem.words(3);
        const url = Math.floor(Math.random() * 10);

        const output = convertLine("[" + text + "](" + url + ")", [], 'white');
        
        expect(output).to.have.length(1);

        expect(output[0]).to.have.property('text').and.be.equal(text.toString());
        expect(output[0]).to.have.property('clickEvent').which.has.property('action').and.is.equal('change_page');
        expect(output[0]).to.have.property('clickEvent').which.has.property('value').and.is.equal(url);
    });
    it("Open Page Shorthand Works", function() {
        const url = Math.floor(Math.random() * 10);

        const output = convertLine("[" + url + "]()", [], 'white');
        
        expect(output).to.have.length(1);

        expect(output[0]).to.have.property('text').and.be.equal(url.toString());
        expect(output[0]).to.have.property('clickEvent').which.has.property('action').and.is.equal('change_page');
        expect(output[0]).to.have.property('clickEvent').which.has.property('value').and.is.equal(url);
    });
    it("Styling Outside", function() {
        const url = faker.internet.url();

        const output = convertLine("**[" + url + "]()**", [], 'white');
        
        expect(output).to.have.length(1);

        expect(output[0]).to.have.property('bold').and.be.true;
    });
});