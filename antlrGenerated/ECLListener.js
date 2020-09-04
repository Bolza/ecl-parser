// Generated from ECL.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index')

// This class defines a complete listener for a parse tree produced by ECLParser.
function ECLListener() {
  antlr4.tree.ParseTreeListener.call(this)
  return this
}

ECLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype)
ECLListener.prototype.constructor = ECLListener

// Enter a parse tree produced by ECLParser#expressionconstraint.
ECLListener.prototype.enterExpressionconstraint = function(ctx) {}

// Exit a parse tree produced by ECLParser#expressionconstraint.
ECLListener.prototype.exitExpressionconstraint = function(ctx) {}

// Enter a parse tree produced by ECLParser#refinedexpressionconstraint.
ECLListener.prototype.enterRefinedexpressionconstraint = function(ctx) {}

// Exit a parse tree produced by ECLParser#refinedexpressionconstraint.
ECLListener.prototype.exitRefinedexpressionconstraint = function(ctx) {}

// Enter a parse tree produced by ECLParser#compoundexpressionconstraint.
ECLListener.prototype.enterCompoundexpressionconstraint = function(ctx) {}

// Exit a parse tree produced by ECLParser#compoundexpressionconstraint.
ECLListener.prototype.exitCompoundexpressionconstraint = function(ctx) {}

// Enter a parse tree produced by ECLParser#conjunctionexpressionconstraint.
ECLListener.prototype.enterConjunctionexpressionconstraint = function(ctx) {}

// Exit a parse tree produced by ECLParser#conjunctionexpressionconstraint.
ECLListener.prototype.exitConjunctionexpressionconstraint = function(ctx) {}

// Enter a parse tree produced by ECLParser#disjunctionexpressionconstraint.
ECLListener.prototype.enterDisjunctionexpressionconstraint = function(ctx) {}

// Exit a parse tree produced by ECLParser#disjunctionexpressionconstraint.
ECLListener.prototype.exitDisjunctionexpressionconstraint = function(ctx) {}

// Enter a parse tree produced by ECLParser#exclusionexpressionconstraint.
ECLListener.prototype.enterExclusionexpressionconstraint = function(ctx) {}

// Exit a parse tree produced by ECLParser#exclusionexpressionconstraint.
ECLListener.prototype.exitExclusionexpressionconstraint = function(ctx) {}

// Enter a parse tree produced by ECLParser#dottedexpressionconstraint.
ECLListener.prototype.enterDottedexpressionconstraint = function(ctx) {}

// Exit a parse tree produced by ECLParser#dottedexpressionconstraint.
ECLListener.prototype.exitDottedexpressionconstraint = function(ctx) {}

// Enter a parse tree produced by ECLParser#dottedexpressionattribute.
ECLListener.prototype.enterDottedexpressionattribute = function(ctx) {}

// Exit a parse tree produced by ECLParser#dottedexpressionattribute.
ECLListener.prototype.exitDottedexpressionattribute = function(ctx) {}

// Enter a parse tree produced by ECLParser#subexpressionconstraint.
ECLListener.prototype.enterSubexpressionconstraint = function(ctx) {}

// Exit a parse tree produced by ECLParser#subexpressionconstraint.
ECLListener.prototype.exitSubexpressionconstraint = function(ctx) {}

// Enter a parse tree produced by ECLParser#eclfocusconcept.
ECLListener.prototype.enterEclfocusconcept = function(ctx) {}

// Exit a parse tree produced by ECLParser#eclfocusconcept.
ECLListener.prototype.exitEclfocusconcept = function(ctx) {}

// Enter a parse tree produced by ECLParser#dot.
ECLListener.prototype.enterDot = function(ctx) {}

// Exit a parse tree produced by ECLParser#dot.
ECLListener.prototype.exitDot = function(ctx) {}

// Enter a parse tree produced by ECLParser#memberof.
ECLListener.prototype.enterMemberof = function(ctx) {}

// Exit a parse tree produced by ECLParser#memberof.
ECLListener.prototype.exitMemberof = function(ctx) {}

// Enter a parse tree produced by ECLParser#eclconceptreference.
ECLListener.prototype.enterEclconceptreference = function(ctx) {}

// Exit a parse tree produced by ECLParser#eclconceptreference.
ECLListener.prototype.exitEclconceptreference = function(ctx) {}

// Enter a parse tree produced by ECLParser#conceptid.
ECLListener.prototype.enterConceptid = function(ctx) {}

// Exit a parse tree produced by ECLParser#conceptid.
ECLListener.prototype.exitConceptid = function(ctx) {}

// Enter a parse tree produced by ECLParser#term.
ECLListener.prototype.enterTerm = function(ctx) {}

// Exit a parse tree produced by ECLParser#term.
ECLListener.prototype.exitTerm = function(ctx) {}

// Enter a parse tree produced by ECLParser#wildcard.
ECLListener.prototype.enterWildcard = function(ctx) {}

// Exit a parse tree produced by ECLParser#wildcard.
ECLListener.prototype.exitWildcard = function(ctx) {}

// Enter a parse tree produced by ECLParser#constraintoperator.
ECLListener.prototype.enterConstraintoperator = function(ctx) {}

// Exit a parse tree produced by ECLParser#constraintoperator.
ECLListener.prototype.exitConstraintoperator = function(ctx) {}

// Enter a parse tree produced by ECLParser#descendantof.
ECLListener.prototype.enterDescendantof = function(ctx) {}

// Exit a parse tree produced by ECLParser#descendantof.
ECLListener.prototype.exitDescendantof = function(ctx) {}

// Enter a parse tree produced by ECLParser#descendantorselfof.
ECLListener.prototype.enterDescendantorselfof = function(ctx) {}

// Exit a parse tree produced by ECLParser#descendantorselfof.
ECLListener.prototype.exitDescendantorselfof = function(ctx) {}

// Enter a parse tree produced by ECLParser#childof.
ECLListener.prototype.enterChildof = function(ctx) {}

// Exit a parse tree produced by ECLParser#childof.
ECLListener.prototype.exitChildof = function(ctx) {}

// Enter a parse tree produced by ECLParser#ancestorof.
ECLListener.prototype.enterAncestorof = function(ctx) {}

// Exit a parse tree produced by ECLParser#ancestorof.
ECLListener.prototype.exitAncestorof = function(ctx) {}

// Enter a parse tree produced by ECLParser#ancestororselfof.
ECLListener.prototype.enterAncestororselfof = function(ctx) {}

// Exit a parse tree produced by ECLParser#ancestororselfof.
ECLListener.prototype.exitAncestororselfof = function(ctx) {}

// Enter a parse tree produced by ECLParser#parentof.
ECLListener.prototype.enterParentof = function(ctx) {}

// Exit a parse tree produced by ECLParser#parentof.
ECLListener.prototype.exitParentof = function(ctx) {}

// Enter a parse tree produced by ECLParser#conjunction.
ECLListener.prototype.enterConjunction = function(ctx) {}

// Exit a parse tree produced by ECLParser#conjunction.
ECLListener.prototype.exitConjunction = function(ctx) {}

// Enter a parse tree produced by ECLParser#disjunction.
ECLListener.prototype.enterDisjunction = function(ctx) {}

// Exit a parse tree produced by ECLParser#disjunction.
ECLListener.prototype.exitDisjunction = function(ctx) {}

// Enter a parse tree produced by ECLParser#exclusion.
ECLListener.prototype.enterExclusion = function(ctx) {}

// Exit a parse tree produced by ECLParser#exclusion.
ECLListener.prototype.exitExclusion = function(ctx) {}

// Enter a parse tree produced by ECLParser#eclrefinement.
ECLListener.prototype.enterEclrefinement = function(ctx) {}

// Exit a parse tree produced by ECLParser#eclrefinement.
ECLListener.prototype.exitEclrefinement = function(ctx) {}

// Enter a parse tree produced by ECLParser#conjunctionrefinementset.
ECLListener.prototype.enterConjunctionrefinementset = function(ctx) {}

// Exit a parse tree produced by ECLParser#conjunctionrefinementset.
ECLListener.prototype.exitConjunctionrefinementset = function(ctx) {}

// Enter a parse tree produced by ECLParser#disjunctionrefinementset.
ECLListener.prototype.enterDisjunctionrefinementset = function(ctx) {}

// Exit a parse tree produced by ECLParser#disjunctionrefinementset.
ECLListener.prototype.exitDisjunctionrefinementset = function(ctx) {}

// Enter a parse tree produced by ECLParser#subrefinement.
ECLListener.prototype.enterSubrefinement = function(ctx) {}

// Exit a parse tree produced by ECLParser#subrefinement.
ECLListener.prototype.exitSubrefinement = function(ctx) {}

// Enter a parse tree produced by ECLParser#eclattributeset.
ECLListener.prototype.enterEclattributeset = function(ctx) {}

// Exit a parse tree produced by ECLParser#eclattributeset.
ECLListener.prototype.exitEclattributeset = function(ctx) {}

// Enter a parse tree produced by ECLParser#conjunctionattributeset.
ECLListener.prototype.enterConjunctionattributeset = function(ctx) {}

// Exit a parse tree produced by ECLParser#conjunctionattributeset.
ECLListener.prototype.exitConjunctionattributeset = function(ctx) {}

// Enter a parse tree produced by ECLParser#disjunctionattributeset.
ECLListener.prototype.enterDisjunctionattributeset = function(ctx) {}

// Exit a parse tree produced by ECLParser#disjunctionattributeset.
ECLListener.prototype.exitDisjunctionattributeset = function(ctx) {}

// Enter a parse tree produced by ECLParser#subattributeset.
ECLListener.prototype.enterSubattributeset = function(ctx) {}

// Exit a parse tree produced by ECLParser#subattributeset.
ECLListener.prototype.exitSubattributeset = function(ctx) {}

// Enter a parse tree produced by ECLParser#eclattributegroup.
ECLListener.prototype.enterEclattributegroup = function(ctx) {}

// Exit a parse tree produced by ECLParser#eclattributegroup.
ECLListener.prototype.exitEclattributegroup = function(ctx) {}

// Enter a parse tree produced by ECLParser#eclattribute.
ECLListener.prototype.enterEclattribute = function(ctx) {}

// Exit a parse tree produced by ECLParser#eclattribute.
ECLListener.prototype.exitEclattribute = function(ctx) {}

// Enter a parse tree produced by ECLParser#cardinality.
ECLListener.prototype.enterCardinality = function(ctx) {}

// Exit a parse tree produced by ECLParser#cardinality.
ECLListener.prototype.exitCardinality = function(ctx) {}

// Enter a parse tree produced by ECLParser#minvalue.
ECLListener.prototype.enterMinvalue = function(ctx) {}

// Exit a parse tree produced by ECLParser#minvalue.
ECLListener.prototype.exitMinvalue = function(ctx) {}

// Enter a parse tree produced by ECLParser#to.
ECLListener.prototype.enterTo = function(ctx) {}

// Exit a parse tree produced by ECLParser#to.
ECLListener.prototype.exitTo = function(ctx) {}

// Enter a parse tree produced by ECLParser#maxvalue.
ECLListener.prototype.enterMaxvalue = function(ctx) {}

// Exit a parse tree produced by ECLParser#maxvalue.
ECLListener.prototype.exitMaxvalue = function(ctx) {}

// Enter a parse tree produced by ECLParser#many.
ECLListener.prototype.enterMany = function(ctx) {}

// Exit a parse tree produced by ECLParser#many.
ECLListener.prototype.exitMany = function(ctx) {}

// Enter a parse tree produced by ECLParser#reverseflag.
ECLListener.prototype.enterReverseflag = function(ctx) {}

// Exit a parse tree produced by ECLParser#reverseflag.
ECLListener.prototype.exitReverseflag = function(ctx) {}

// Enter a parse tree produced by ECLParser#eclattributename.
ECLListener.prototype.enterEclattributename = function(ctx) {}

// Exit a parse tree produced by ECLParser#eclattributename.
ECLListener.prototype.exitEclattributename = function(ctx) {}

// Enter a parse tree produced by ECLParser#expressioncomparisonoperator.
ECLListener.prototype.enterExpressioncomparisonoperator = function(ctx) {}

// Exit a parse tree produced by ECLParser#expressioncomparisonoperator.
ECLListener.prototype.exitExpressioncomparisonoperator = function(ctx) {}

// Enter a parse tree produced by ECLParser#numericcomparisonoperator.
ECLListener.prototype.enterNumericcomparisonoperator = function(ctx) {}

// Exit a parse tree produced by ECLParser#numericcomparisonoperator.
ECLListener.prototype.exitNumericcomparisonoperator = function(ctx) {}

// Enter a parse tree produced by ECLParser#stringcomparisonoperator.
ECLListener.prototype.enterStringcomparisonoperator = function(ctx) {}

// Exit a parse tree produced by ECLParser#stringcomparisonoperator.
ECLListener.prototype.exitStringcomparisonoperator = function(ctx) {}

// Enter a parse tree produced by ECLParser#numericvalue.
ECLListener.prototype.enterNumericvalue = function(ctx) {}

// Exit a parse tree produced by ECLParser#numericvalue.
ECLListener.prototype.exitNumericvalue = function(ctx) {}

// Enter a parse tree produced by ECLParser#stringvalue.
ECLListener.prototype.enterStringvalue = function(ctx) {}

// Exit a parse tree produced by ECLParser#stringvalue.
ECLListener.prototype.exitStringvalue = function(ctx) {}

// Enter a parse tree produced by ECLParser#integervalue.
ECLListener.prototype.enterIntegervalue = function(ctx) {}

// Exit a parse tree produced by ECLParser#integervalue.
ECLListener.prototype.exitIntegervalue = function(ctx) {}

// Enter a parse tree produced by ECLParser#decimalvalue.
ECLListener.prototype.enterDecimalvalue = function(ctx) {}

// Exit a parse tree produced by ECLParser#decimalvalue.
ECLListener.prototype.exitDecimalvalue = function(ctx) {}

// Enter a parse tree produced by ECLParser#nonnegativeintegervalue.
ECLListener.prototype.enterNonnegativeintegervalue = function(ctx) {}

// Exit a parse tree produced by ECLParser#nonnegativeintegervalue.
ECLListener.prototype.exitNonnegativeintegervalue = function(ctx) {}

// Enter a parse tree produced by ECLParser#sctid.
ECLListener.prototype.enterSctid = function(ctx) {}

// Exit a parse tree produced by ECLParser#sctid.
ECLListener.prototype.exitSctid = function(ctx) {}

// Enter a parse tree produced by ECLParser#ws.
ECLListener.prototype.enterWs = function(ctx) {}

// Exit a parse tree produced by ECLParser#ws.
ECLListener.prototype.exitWs = function(ctx) {}

// Enter a parse tree produced by ECLParser#mws.
ECLListener.prototype.enterMws = function(ctx) {}

// Exit a parse tree produced by ECLParser#mws.
ECLListener.prototype.exitMws = function(ctx) {}

// Enter a parse tree produced by ECLParser#comment.
ECLListener.prototype.enterComment = function(ctx) {}

// Exit a parse tree produced by ECLParser#comment.
ECLListener.prototype.exitComment = function(ctx) {}

// Enter a parse tree produced by ECLParser#nonstarchar.
ECLListener.prototype.enterNonstarchar = function(ctx) {}

// Exit a parse tree produced by ECLParser#nonstarchar.
ECLListener.prototype.exitNonstarchar = function(ctx) {}

// Enter a parse tree produced by ECLParser#starwithnonfslash.
ECLListener.prototype.enterStarwithnonfslash = function(ctx) {}

// Exit a parse tree produced by ECLParser#starwithnonfslash.
ECLListener.prototype.exitStarwithnonfslash = function(ctx) {}

// Enter a parse tree produced by ECLParser#nonfslash.
ECLListener.prototype.enterNonfslash = function(ctx) {}

// Exit a parse tree produced by ECLParser#nonfslash.
ECLListener.prototype.exitNonfslash = function(ctx) {}

// Enter a parse tree produced by ECLParser#sp.
ECLListener.prototype.enterSp = function(ctx) {}

// Exit a parse tree produced by ECLParser#sp.
ECLListener.prototype.exitSp = function(ctx) {}

// Enter a parse tree produced by ECLParser#htab.
ECLListener.prototype.enterHtab = function(ctx) {}

// Exit a parse tree produced by ECLParser#htab.
ECLListener.prototype.exitHtab = function(ctx) {}

// Enter a parse tree produced by ECLParser#cr.
ECLListener.prototype.enterCr = function(ctx) {}

// Exit a parse tree produced by ECLParser#cr.
ECLListener.prototype.exitCr = function(ctx) {}

// Enter a parse tree produced by ECLParser#lf.
ECLListener.prototype.enterLf = function(ctx) {}

// Exit a parse tree produced by ECLParser#lf.
ECLListener.prototype.exitLf = function(ctx) {}

// Enter a parse tree produced by ECLParser#qm.
ECLListener.prototype.enterQm = function(ctx) {}

// Exit a parse tree produced by ECLParser#qm.
ECLListener.prototype.exitQm = function(ctx) {}

// Enter a parse tree produced by ECLParser#bs.
ECLListener.prototype.enterBs = function(ctx) {}

// Exit a parse tree produced by ECLParser#bs.
ECLListener.prototype.exitBs = function(ctx) {}

// Enter a parse tree produced by ECLParser#digit.
ECLListener.prototype.enterDigit = function(ctx) {}

// Exit a parse tree produced by ECLParser#digit.
ECLListener.prototype.exitDigit = function(ctx) {}

// Enter a parse tree produced by ECLParser#zero.
ECLListener.prototype.enterZero = function(ctx) {}

// Exit a parse tree produced by ECLParser#zero.
ECLListener.prototype.exitZero = function(ctx) {}

// Enter a parse tree produced by ECLParser#digitnonzero.
ECLListener.prototype.enterDigitnonzero = function(ctx) {}

// Exit a parse tree produced by ECLParser#digitnonzero.
ECLListener.prototype.exitDigitnonzero = function(ctx) {}

// Enter a parse tree produced by ECLParser#nonwsnonpipe.
ECLListener.prototype.enterNonwsnonpipe = function(ctx) {}

// Exit a parse tree produced by ECLParser#nonwsnonpipe.
ECLListener.prototype.exitNonwsnonpipe = function(ctx) {}

// Enter a parse tree produced by ECLParser#anynonescapedchar.
ECLListener.prototype.enterAnynonescapedchar = function(ctx) {}

// Exit a parse tree produced by ECLParser#anynonescapedchar.
ECLListener.prototype.exitAnynonescapedchar = function(ctx) {}

// Enter a parse tree produced by ECLParser#escapedchar.
ECLListener.prototype.enterEscapedchar = function(ctx) {}

// Exit a parse tree produced by ECLParser#escapedchar.
ECLListener.prototype.exitEscapedchar = function(ctx) {}

exports.ECLListener = ECLListener
