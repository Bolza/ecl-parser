// Generated from ECL.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index')

// This class defines a complete generic visitor for a parse tree produced by ECLParser.

function ECLVisitor() {
  antlr4.tree.ParseTreeVisitor.call(this)
  return this
}

ECLVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype)
ECLVisitor.prototype.constructor = ECLVisitor

// Visit a parse tree produced by ECLParser#expressionconstraint.
ECLVisitor.prototype.visitExpressionconstraint = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#refinedexpressionconstraint.
ECLVisitor.prototype.visitRefinedexpressionconstraint = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#compoundexpressionconstraint.
ECLVisitor.prototype.visitCompoundexpressionconstraint = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#conjunctionexpressionconstraint.
ECLVisitor.prototype.visitConjunctionexpressionconstraint = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#disjunctionexpressionconstraint.
ECLVisitor.prototype.visitDisjunctionexpressionconstraint = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#exclusionexpressionconstraint.
ECLVisitor.prototype.visitExclusionexpressionconstraint = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#dottedexpressionconstraint.
ECLVisitor.prototype.visitDottedexpressionconstraint = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#dottedexpressionattribute.
ECLVisitor.prototype.visitDottedexpressionattribute = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#subexpressionconstraint.
ECLVisitor.prototype.visitSubexpressionconstraint = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#eclfocusconcept.
ECLVisitor.prototype.visitEclfocusconcept = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#dot.
ECLVisitor.prototype.visitDot = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#memberof.
ECLVisitor.prototype.visitMemberof = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#eclconceptreference.
ECLVisitor.prototype.visitEclconceptreference = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#conceptid.
ECLVisitor.prototype.visitConceptid = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#term.
ECLVisitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#wildcard.
ECLVisitor.prototype.visitWildcard = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#constraintoperator.
ECLVisitor.prototype.visitConstraintoperator = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#descendantof.
ECLVisitor.prototype.visitDescendantof = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#descendantorselfof.
ECLVisitor.prototype.visitDescendantorselfof = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#childof.
ECLVisitor.prototype.visitChildof = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#ancestorof.
ECLVisitor.prototype.visitAncestorof = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#ancestororselfof.
ECLVisitor.prototype.visitAncestororselfof = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#parentof.
ECLVisitor.prototype.visitParentof = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#conjunction.
ECLVisitor.prototype.visitConjunction = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#disjunction.
ECLVisitor.prototype.visitDisjunction = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#exclusion.
ECLVisitor.prototype.visitExclusion = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#eclrefinement.
ECLVisitor.prototype.visitEclrefinement = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#conjunctionrefinementset.
ECLVisitor.prototype.visitConjunctionrefinementset = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#disjunctionrefinementset.
ECLVisitor.prototype.visitDisjunctionrefinementset = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#subrefinement.
ECLVisitor.prototype.visitSubrefinement = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#eclattributeset.
ECLVisitor.prototype.visitEclattributeset = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#conjunctionattributeset.
ECLVisitor.prototype.visitConjunctionattributeset = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#disjunctionattributeset.
ECLVisitor.prototype.visitDisjunctionattributeset = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#subattributeset.
ECLVisitor.prototype.visitSubattributeset = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#eclattributegroup.
ECLVisitor.prototype.visitEclattributegroup = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#eclattribute.
ECLVisitor.prototype.visitEclattribute = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#cardinality.
ECLVisitor.prototype.visitCardinality = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#minvalue.
ECLVisitor.prototype.visitMinvalue = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#to.
ECLVisitor.prototype.visitTo = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#maxvalue.
ECLVisitor.prototype.visitMaxvalue = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#many.
ECLVisitor.prototype.visitMany = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#reverseflag.
ECLVisitor.prototype.visitReverseflag = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#eclattributename.
ECLVisitor.prototype.visitEclattributename = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#expressioncomparisonoperator.
ECLVisitor.prototype.visitExpressioncomparisonoperator = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#numericcomparisonoperator.
ECLVisitor.prototype.visitNumericcomparisonoperator = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#stringcomparisonoperator.
ECLVisitor.prototype.visitStringcomparisonoperator = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#numericvalue.
ECLVisitor.prototype.visitNumericvalue = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#stringvalue.
ECLVisitor.prototype.visitStringvalue = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#integervalue.
ECLVisitor.prototype.visitIntegervalue = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#decimalvalue.
ECLVisitor.prototype.visitDecimalvalue = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#nonnegativeintegervalue.
ECLVisitor.prototype.visitNonnegativeintegervalue = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#sctid.
ECLVisitor.prototype.visitSctid = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#ws.
ECLVisitor.prototype.visitWs = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#mws.
ECLVisitor.prototype.visitMws = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#comment.
ECLVisitor.prototype.visitComment = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#nonstarchar.
ECLVisitor.prototype.visitNonstarchar = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#starwithnonfslash.
ECLVisitor.prototype.visitStarwithnonfslash = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#nonfslash.
ECLVisitor.prototype.visitNonfslash = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#sp.
ECLVisitor.prototype.visitSp = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#htab.
ECLVisitor.prototype.visitHtab = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#cr.
ECLVisitor.prototype.visitCr = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#lf.
ECLVisitor.prototype.visitLf = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#qm.
ECLVisitor.prototype.visitQm = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#bs.
ECLVisitor.prototype.visitBs = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#digit.
ECLVisitor.prototype.visitDigit = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#zero.
ECLVisitor.prototype.visitZero = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#digitnonzero.
ECLVisitor.prototype.visitDigitnonzero = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#nonwsnonpipe.
ECLVisitor.prototype.visitNonwsnonpipe = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#anynonescapedchar.
ECLVisitor.prototype.visitAnynonescapedchar = function(ctx) {
  return this.visitChildren(ctx)
}

// Visit a parse tree produced by ECLParser#escapedchar.
ECLVisitor.prototype.visitEscapedchar = function(ctx) {
  return this.visitChildren(ctx)
}

exports.ECLVisitor = ECLVisitor
