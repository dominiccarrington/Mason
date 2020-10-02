import chai from 'chai';
import { convertLine } from "../build.js";
import faker from 'faker';

const { expect } = chai;

describe("Bold", function () {
    it("Only Bold", function () {
        let bold;
        const output = convertLine("**" + (bold = faker.lorem.words(3)) + "**", []);

        expect(output).to.have.length(1);
        
        expect(output[0]).to.have.property('text').and.be.equal(bold);
        expect(output[0]).to.have.property('bold').and.be.true;
    });
    it("Text Before", function () {
        let before, bold;
        const output = convertLine((before = faker.lorem.words(3)) + "**" + (bold = faker.lorem.words(3)) + "**", []);
        
        expect(output).to.have.length(2);
        
        expect(output[0]).to.have.property('text').and.be.equal(before);
        
        expect(output[1]).to.have.property('text').and.be.equal(bold);
        expect(output[1]).to.have.property('bold').and.be.true;
    });
    it("Text After", function () {
        let after, bold;
        const output = convertLine("**" + (bold = faker.lorem.words(3)) + "**" + (after = faker.lorem.words(3)), []);
        
        expect(output).to.have.length(2);
        
        expect(output[0]).to.have.property('text').and.be.equal(bold);
        expect(output[0]).to.have.property('bold').and.be.true;
        
        expect(output[1]).to.have.property('text').and.be.equal(after);
    });
    it("Text Before and After", function () {
        let before, after, bold;
        const output = convertLine((before = faker.lorem.words(3)) + "**" + (bold = faker.lorem.words(3)) + "**" + (after = faker.lorem.words(3)), []);
        
        expect(output).to.have.length(3);
        
        expect(output[0]).to.have.property('text').and.be.equal(before);

        expect(output[1]).to.have.property('text').and.be.equal(bold);
        expect(output[1]).to.have.property('bold').and.be.true;
        
        expect(output[2]).to.have.property('text').and.be.equal(after);
    });
});

describe("Italic", function () {
    it("Only Italic", function () {
        let italic;
        const output = convertLine("*" + (italic = faker.lorem.words(3)) + "*", []);

        expect(output).to.have.length(1);
        
        expect(output[0]).to.have.property('text').and.be.equal(italic);
        expect(output[0]).to.have.property('italic').and.be.true;
    });
    it("Text Before", function () {
        let before, italic;
        const output = convertLine((before = faker.lorem.words(3)) + "*" + (italic = faker.lorem.words(3)) + "*", []);
        
        expect(output).to.have.length(2);
        
        expect(output[0]).to.have.property('text').and.be.equal(before);
        
        expect(output[1]).to.have.property('text').and.be.equal(italic);
        expect(output[1]).to.have.property('italic').and.be.true;
    });
    it("Text After", function () {
        let after, italic;
        const output = convertLine("*" + (italic = faker.lorem.words(3)) + "*" + (after = faker.lorem.words(3)), []);
        
        expect(output).to.have.length(2);
        
        expect(output[0]).to.have.property('text').and.be.equal(italic);
        expect(output[0]).to.have.property('italic').and.be.true;
        
        expect(output[1]).to.have.property('text').and.be.equal(after);
    });
    it("Text Before and After", function () {
        let before, after, italic;
        const output = convertLine((before = faker.lorem.words(3)) + "*" + (italic = faker.lorem.words(3)) + "*" + (after = faker.lorem.words(3)), []);
        
        expect(output).to.have.length(3);
        
        expect(output[0]).to.have.property('text').and.be.equal(before);

        expect(output[1]).to.have.property('text').and.be.equal(italic);
        expect(output[1]).to.have.property('italic').and.be.true;
        
        expect(output[2]).to.have.property('text').and.be.equal(after);
    });
});

describe("Underline", function () {
    it("Only Underline", function () {
        let underline;
        const output = convertLine("_" + (underline = faker.lorem.words(3)) + "_", []);

        expect(output).to.have.length(1);
        
        expect(output[0]).to.have.property('text').and.be.equal(underline);
        expect(output[0]).to.have.property('underline').and.be.true;
    });
    it("Text Before", function () {
        let before, underline;
        const output = convertLine((before = faker.lorem.words(3)) + "_" + (underline = faker.lorem.words(3)) + "_", []);
        
        expect(output).to.have.length(2);
        
        expect(output[0]).to.have.property('text').and.be.equal(before);
        
        expect(output[1]).to.have.property('text').and.be.equal(underline);
        expect(output[1]).to.have.property('underline').and.be.true;
    });
    it("Text After", function () {
        let after, underline;
        const output = convertLine("_" + (underline = faker.lorem.words(3)) + "_" + (after = faker.lorem.words(3)), []);
        
        expect(output).to.have.length(2);
        
        expect(output[0]).to.have.property('text').and.be.equal(underline);
        expect(output[0]).to.have.property('underline').and.be.true;
        
        expect(output[1]).to.have.property('text').and.be.equal(after);
    });
    it("Text Before and After", function () {
        let before, after, underline;
        const output = convertLine((before = faker.lorem.words(3)) + "_" + (underline = faker.lorem.words(3)) + "_" + (after = faker.lorem.words(3)), []);
        
        expect(output).to.have.length(3);
        
        expect(output[0]).to.have.property('text').and.be.equal(before);

        expect(output[1]).to.have.property('text').and.be.equal(underline);
        expect(output[1]).to.have.property('underline').and.be.true;
        
        expect(output[2]).to.have.property('text').and.be.equal(after);
    });
});

describe("Strikethrough", function () {
    it("Only Strikethrough", function () {
        let strikethrough;
        const output = convertLine("-" + (strikethrough = faker.lorem.words(3)) + "-", []);

        expect(output).to.have.length(1);
        
        expect(output[0]).to.have.property('text').and.be.equal(strikethrough);
        expect(output[0]).to.have.property('strikethrough').and.be.true;
    });
    it("Text Before", function () {
        let before, strikethrough;
        const output = convertLine((before = faker.lorem.words(3)) + "-" + (strikethrough = faker.lorem.words(3)) + "-", []);
        
        expect(output).to.have.length(2);
        
        expect(output[0]).to.have.property('text').and.be.equal(before);
        
        expect(output[1]).to.have.property('text').and.be.equal(strikethrough);
        expect(output[1]).to.have.property('strikethrough').and.be.true;
    });
    it("Text After", function () {
        let after, strikethrough;
        const output = convertLine("-" + (strikethrough = faker.lorem.words(3)) + "-" + (after = faker.lorem.words(3)), []);
        
        expect(output).to.have.length(2);
        
        expect(output[0]).to.have.property('text').and.be.equal(strikethrough);
        expect(output[0]).to.have.property('strikethrough').and.be.true;
        
        expect(output[1]).to.have.property('text').and.be.equal(after);
    });
    it("Text Before and After", function () {
        let before, after, strikethrough;
        const output = convertLine((before = faker.lorem.words(3)) + "-" + (strikethrough = faker.lorem.words(3)) + "-" + (after = faker.lorem.words(3)), []);
        
        expect(output).to.have.length(3);
        
        expect(output[0]).to.have.property('text').and.be.equal(before);

        expect(output[1]).to.have.property('text').and.be.equal(strikethrough);
        expect(output[1]).to.have.property('strikethrough').and.be.true;
        
        expect(output[2]).to.have.property('text').and.be.equal(after);
    });
});

describe("Obfuscated", function () {
    it("Only Obfuscated", function () {
        let obfuscated;
        const output = convertLine("#" + (obfuscated = faker.lorem.words(3)) + "#", []);

        expect(output).to.have.length(1);
        
        expect(output[0]).to.have.property('text').and.be.equal(obfuscated);
        expect(output[0]).to.have.property('obfuscated').and.be.true;
    });
    it("Text Before", function () {
        let before, obfuscated;
        const output = convertLine((before = faker.lorem.words(3)) + "#" + (obfuscated = faker.lorem.words(3)) + "#", []);
        
        expect(output).to.have.length(2);
        
        expect(output[0]).to.have.property('text').and.be.equal(before);
        
        expect(output[1]).to.have.property('text').and.be.equal(obfuscated);
        expect(output[1]).to.have.property('obfuscated').and.be.true;
    });
    it("Text After", function () {
        let after, obfuscated;
        const output = convertLine("#" + (obfuscated = faker.lorem.words(3)) + "#" + (after = faker.lorem.words(3)), []);
        
        expect(output).to.have.length(2);
        
        expect(output[0]).to.have.property('text').and.be.equal(obfuscated);
        expect(output[0]).to.have.property('obfuscated').and.be.true;
        
        expect(output[1]).to.have.property('text').and.be.equal(after);
    });
    it("Text Before and After", function () {
        let before, after, obfuscated;
        const output = convertLine((before = faker.lorem.words(3)) + "#" + (obfuscated = faker.lorem.words(3)) + "#" + (after = faker.lorem.words(3)), []);
        
        expect(output).to.have.length(3);
        
        expect(output[0]).to.have.property('text').and.be.equal(before);

        expect(output[1]).to.have.property('text').and.be.equal(obfuscated);
        expect(output[1]).to.have.property('obfuscated').and.be.true;
        
        expect(output[2]).to.have.property('text').and.be.equal(after);
    });
});

describe("Colored", function () {
    it("Only Colored", function () {
        let color = faker.commerce.color(), text = faker.lorem.words(3);
        const output = convertLine("%(" + color + ")" + text + "%", []);

        expect(output).to.have.length(1);
        
        expect(output[0]).to.have.property('text').and.be.equal(text);
        expect(output[0]).to.have.property('color').and.be.equal(color);
    });
    it("Text Before", function () {
        let color = faker.commerce.color(), before = faker.lorem.words(3), text = faker.lorem.words(3);
        const output = convertLine(before + "%(" + color + ")" + text + "%", [], 'white');

        expect(output).to.have.length(2);
        
        expect(output[0]).to.have.property('text').and.be.equal(before);
        expect(output[0]).to.have.property('color').and.be.equal('white');

        expect(output[1]).to.have.property('text').and.be.equal(text);
        expect(output[1]).to.have.property('color').and.be.equal(color);
    });
    it("Text After", function () {
        let color = faker.commerce.color(), after = faker.lorem.words(3), text = faker.lorem.words(3);
        const output = convertLine("%(" + color + ")" + text + "%" + after, [], 'white');

        expect(output).to.have.length(2);
        
        expect(output[0]).to.have.property('text').and.be.equal(text);
        expect(output[0]).to.have.property('color').and.be.equal(color);

        expect(output[1]).to.have.property('text').and.be.equal(after);
        expect(output[1]).to.have.property('color').and.be.equal('white');
    });
    it("Text Before and After", function () {
        let color = faker.commerce.color(), after = faker.lorem.words(3), before = faker.lorem.words(3), text = faker.lorem.words(3);
        const output = convertLine(before + "%(" + color + ")" + text + "%" + after, [], 'white');

        expect(output).to.have.length(3);
        
        expect(output[0]).to.have.property('text').and.be.equal(before);
        expect(output[0]).to.have.property('color').and.be.equal('white');

        expect(output[1]).to.have.property('text').and.be.equal(text);
        expect(output[1]).to.have.property('color').and.be.equal(color);

        expect(output[2]).to.have.property('text').and.be.equal(after);
        expect(output[2]).to.have.property('color').and.be.equal('white');
    });
    it("Two Colors on one Line", function () {
        const text1 = faker.lorem.words(3);
        const text2 = faker.lorem.words(3);

        const output = convertLine("%(red)" + text1 + "% %(green)" + text2 + "%", [], 'white');

        expect(output).to.have.length(3);

        expect(output[0]).to.have.property('color').and.be.equal('red');
        expect(output[1]).to.have.property('color').and.be.equal('white');
        expect(output[2]).to.have.property('color').and.be.equal('green');
    });
});