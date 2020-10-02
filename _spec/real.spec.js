import chai from 'chai';
import { convertLine } from "../build.js";
import faker from 'faker';

const { expect } = chai;

describe("Examples", function () {
    it("Enabled/Disabled", function () {
        const text1 = faker.lorem.word();
        const text2 = faker.lorem.word();
        const command1 = "/say " + faker.lorem.words(3);
        const command2 = "/say " + faker.lorem.words(3);

        const output = convertLine("%(green)[" + text1 + "](" + command1 + ")% | %(red)[" + text2 + "](" + command2 + ")%", [], 'white');
        expect(output).to.have.length(3);

        expect(output[0]).to.have.property('color').and.be.equal('green');
        expect(output[0]).to.have.property('text').and.be.equal(text1);
        expect(output[0]).to.have.property('clickEvent').which.has.property('action').and.is.equal('run_command');
        expect(output[0]).to.have.property('clickEvent').which.has.property('value').and.is.equal(command1);

        expect(output[1]).to.have.property('color').and.be.equal('white');
        expect(output[1]).to.have.property('text').and.be.equal(" | ");

        expect(output[2]).to.have.property('color').and.be.equal('red');
        expect(output[2]).to.have.property('text').and.be.equal(text2);
        expect(output[2]).to.have.property('clickEvent').which.has.property('action').and.is.equal('run_command');
        expect(output[2]).to.have.property('clickEvent').which.has.property('value').and.is.equal(command2);
    });
});