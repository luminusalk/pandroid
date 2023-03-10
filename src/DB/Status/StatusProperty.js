/**
 * DB/Status/StatusProperty.js
 *
 * Status property enumeration
 *
 * This file is part of ROBrowser, (http:www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
define(function()
{
	"use strict";

	return {
		SPEED:                            0x00,
		EXP:                              0x01,
		JOBEXP:                           0x02,
		VIRTUE:                           0x03,
		HONOR:                            0x04,
		HP:                               0x05,
		MAXHP:                            0x06,
		SP:                               0x07,
		MAXSP:                            0x08,
		POINT:                            0x09,
		HAIRCOLOR:                        0x0a,
		CLEVEL:                           0x0b,
		SKPOINT:                          0x0c,
		STR:                              0x0d,
		AGI:                              0x0e,
		VIT:                              0x0f,
		INT:                              0x10,
		DEX:                              0x11,
		LUK:                              0x12,
		JOB:                              0x13,
		MONEY:                            0x14,
		SEX:                              0x15,
		MAXEXP:                           0x16,
		MAXJOBEXP:                        0x17,
		WEIGHT:                           0x18,
		MAXWEIGHT:                        0x19,
		POISON:                           0x1a,
		STONE:                            0x1b,
		CURSE:                            0x1c,
		FREEZING:                         0x1d,
		SILENCE:                          0x1e,
		CONFUSION:                        0x1f,
		STANDARD_STR:                     0x20,
		STANDARD_AGI:                     0x21,
		STANDARD_VIT:                     0x22,
		STANDARD_INT:                     0x23,
		STANDARD_DEX:                     0x24,
		STANDARD_LUK:                     0x25,
		ATTACKMT:                         0x26,
		ATTACKEDMT:                       0x27,
		NV_BASIC:                         0x28,
		ATTPOWER:                         0x29,
		REFININGPOWER:                    0x2a,
		MAX_MATTPOWER:                    0x2b,
		MIN_MATTPOWER:                    0x2c,
		ITEMDEFPOWER:                     0x2d,
		PLUSDEFPOWER:                     0x2e,
		MDEFPOWER:                        0x2f,
		PLUSMDEFPOWER:                    0x30,
		HITSUCCESSVALUE:                  0x31,
		AVOIDSUCCESSVALUE:                0x32,
		PLUSAVOIDSUCCESSVALUE:            0x33,
		CRITICALSUCCESSVALUE:             0x34,
		ASPD:                             0x35,
		PLUSASPD:                         0x36,
		JOBLEVEL:                         0x37,
		ACCESSORY2:                       0x38,
		ACCESSORY3:                       0x39,
		HEADPALETTE:                      0x3a,
		BODYPALETTE:                      0x3b,
		PKHONOR:                          0x3c,
		CURXPOS:                          0x3d,
		CURYPOS:                          0x3e,
		CURDIR:                           0x3f,
		CHARACTERID:                      0x40,
		ACCOUNTID:                        0x41,
		MAPID:                            0x42,
		MAPNAME:                          0x43,
		ACCOUNTNAME:                      0x44,
		CHARACTERNAME:                    0x45,
		ITEM_COUNT:                       0x46,
		ITEM_ITID:                        0x47,
		ITEM_SLOT1:                       0x48,
		ITEM_SLOT2:                       0x49,
		ITEM_SLOT3:                       0x4a,
		ITEM_SLOT4:                       0x4b,
		HEAD:                             0x4c,
		WEAPON:                           0x4d,
		ACCESSORY:                        0x4e,
		STATE:                            0x4f,
		MOVEREQTIME:                      0x50,
		GROUPID:                          0x51,
		ATTPOWERPLUSTIME:                 0x52,
		ATTPOWERPLUSPERCENT:              0x53,
		DEFPOWERPLUSTIME:                 0x54,
		DEFPOWERPLUSPERCENT:              0x55,
		DAMAGENOMOTIONTIME:               0x56,
		BODYSTATE:                        0x57,
		HEALTHSTATE:                      0x58,
		RESETHEALTHSTATE:                 0x59,
		CURRENTSTATE:                     0x5a,
		RESETEFFECTIVE:                   0x5b,
		GETEFFECTIVE:                     0x5c,
		EFFECTSTATE:                      0x5d,
		SIGHTABILITYEXPIREDTIME:          0x5e,
		SIGHTRANGE:                       0x5f,
		SIGHTPLUSATTPOWER:                0x60,
		STREFFECTIVETIME:                 0x61,
		AGIEFFECTIVETIME:                 0x62,
		VITEFFECTIVETIME:                 0x63,
		INTEFFECTIVETIME:                 0x64,
		DEXEFFECTIVETIME:                 0x65,
		LUKEFFECTIVETIME:                 0x66,
		STRAMOUNT:                        0x67,
		AGIAMOUNT:                        0x68,
		VITAMOUNT:                        0x69,
		INTAMOUNT:                        0x6a,
		DEXAMOUNT:                        0x6b,
		LUKAMOUNT:                        0x6c,
		MAXHPAMOUNT:                      0x6d,
		MAXSPAMOUNT:                      0x6e,
		MAXHPPERCENT:                     0x6f,
		MAXSPPERCENT:                     0x70,
		HPACCELERATION:                   0x71,
		SPACCELERATION:                   0x72,
		SPEEDAMOUNT:                      0x73,
		SPEEDDELTA:                       0x74,
		SPEEDDELTA2:                      0x75,
		PLUSATTRANGE:                     0x76,
		DISCOUNTPERCENT:                  0x77,
		AVOIDABLESUCCESSPERCENT:          0x78,
		STATUSDEFPOWER:                   0x79,
		PLUSDEFPOWERINACOLYTE:            0x7a,
		MAGICITEMDEFPOWER:                0x7b,
		MAGICSTATUSDEFPOWER:              0x7c,
		CLASS:                            0x7d,
		PLUSATTACKPOWEROFITEM:            0x7e,
		PLUSDEFPOWEROFITEM:               0x7f,
		PLUSMDEFPOWEROFITEM:              0x80,
		PLUSARROWPOWEROFITEM:             0x81,
		PLUSATTREFININGPOWEROFITEM:       0x82,
		PLUSDEFREFININGPOWEROFITEM:       0x83,
		IDENTIFYNUMBER:                   0x84,
		ISDAMAGED:                        0x85,
		ISIDENTIFIED:                     0x86,
		REFININGLEVEL:                    0x87,
		WEARSTATE:                        0x88,
		ISLUCKY:                          0x89,
		ATTACKPROPERTY:                   0x8a,
		STORMGUSTCNT:                     0x8b,
		MAGICATKPERCENT:                  0x8c,
		MYMOBCOUNT:                       0x8d,
		ISCARTON:                         0x8e,
		GDID:                             0x8f,
		NPCXSIZE:                         0x90,
		NPCYSIZE:                         0x91,
		RACE:                             0x92,
		SCALE:                            0x93,
		PROPERTY:                         0x94,
		PLUSATTACKPOWEROFITEM_RHAND:      0x95,
		PLUSATTACKPOWEROFITEM_LHAND:      0x96,
		PLUSATTREFININGPOWEROFITEM_RHAND: 0x97,
		PLUSATTREFININGPOWEROFITEM_LHAND: 0x98,
		TOLERACE:                         0x99,
		ARMORPROPERTY:                    0x9a,
		ISMAGICIMMUNE:                    0x9b,
		ISFALCON:                         0x9c,
		ISRIDING:                         0x9d,
		MODIFIED:                         0x9e,
		FULLNESS:                         0x9f,
		RELATIONSHIP:                     0xa0,
		ACCESSARY:                        0xa1,
		SIZETYPE:                         0xa2,
		SHOES:                            0xa3,
		STATUSATTACKPOWER:                0xa4,
		BASICAVOIDANCE:                   0xa5,
		BASICHIT:                         0xa6,
		PLUSASPDPERCENT:                  0xa7,
		CPARTY:                           0xa8,
		ISMARRIED:                        0xa9,
		ISGUILD:                          0xaa,
		ISFALCONON:                       0xab,
		ISPECOON:                         0xac,
		ISPARTYMASTER:                    0xad,
		ISGUILDMASTER:                    0xae,
		BODYSTATENORMAL:                  0xaf,
		HEALTHSTATENORMAL:                0xb0,
		STUN:                             0xb1,
		SLEEP:                            0xb2,
		UNDEAD:                           0xb3,
		BLIND:                            0xb4,
		BLOODING:                         0xb5,
		BSPOINT:                          0xb6,
		ACPOINT:                          0xb7,
		BSRANK:                           0xb8,
		ACRANK:                           0xb9,
		CHANGESPEED:                      0xba,
		CHANGESPEEDTIME:                  0xbb,
		MAGICATKPOWER:                    0xbc,
		MER_KILLCOUNT:                    0xbd,
		MER_FAITH:                        0xbe,
		MDEFPERCENT:                      0xbf,
		CRITICAL_DEF:                     0xc0,
		ITEMPOWER:                        0xc1,
		MAGICDAMAGEREDUCE:                0xc2,
		STATUSMAGICPOWER:                 0xc3,
		PLUSMAGICPOWEROFITEM:             0xc4,
		ITEMMAGICPOWER:                   0xc5,
		NAME:                             0xc6,
		FSMSTATE:                         0xc7,
		ATTMPOWER:                        0xc8,
		CARTWEIGHT:                       0xc9,
		HP_SELF:                          0xca,
		SP_SELF:                          0xcb,
		COSTUME_BODY:                     0xcc,
		RESET_COSTUMES:                   0xcd,
		ROBE:                             0xce
	};
});
