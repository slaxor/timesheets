require('object-extensions/date');
var config = require(process.env.TIMESHEETS_APPDIR + '/etc/timesheets/default'),
  fs = require('fs'),
  args = process.argv.slice(2,process.argv.length),
  data,
  help = function () {
    console.error('\n________________________________________________________________________________');
    console.error('Usage of timesheets:');
    console.error(process.env.TIMESHEETS_APPDIR +'/bin/ts <project> <date> <hours> [description]');
    console.error('________________________________________________________________________________\n');
  },
  date = Date.fromString(args[1]);

console.log('args:', args);
if (args.length < 3) {help(); process.exit(1);}

//console.log(process.env.TIMESHEETS_HOME);
//console.log(process.env.TIMESHEETS_APPDIR);

fs.stat(process.env.TIMESHEETS_HOME, function (err, stats) {
   if (err) { fs.mkdir(process.env.TIMESHEETS_HOME) ;throw err; }
   //console.log('stats: ' + JSON.stringify(stats));
});

data = config.storage_format.replace(/%date/, date.strftime(config.date_format)).replace(/%time/, args[2]).replace(/%description/, "'" + args.slice(3,args.length).join(' ') + "'");
console.log('data:', data);

fs.appendFile(process.env.TIMESHEETS_HOME + '/' + args[0] + '.timesheet', data + '\n', function (err) {
  if (err) { throw err; }
  //console.log('The "data to append" was appended to file!');
});

