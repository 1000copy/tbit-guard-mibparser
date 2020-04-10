var MIB = require('./lib/mib');

var mib = new MIB();
mib.LoadMIBs();
/*  _______mib.LoadMIBs();______
 *	Load MIB modules from 
 *	the RFC_BASE_MINIMUM folder.
 *
 *	CONSOLE LOG:
 *	Loading modules...
 *	Compiling modules...
 *	READY
 _______________________________*/


mib.WriteToFile('mib.JSON');
/*  _mib.WriteToFile('mib.JSON')_
 *	Save JSON compiled MIB modules 
 *  to the RFC_BASE_MINIMUM folder.
 *
 *
 *	CONSOLE LOG:
 *	The file was saved!
 _______________________________*/



