// Multi browser testing is not implemented in this code. Execution is only happening in chrome. We have compared execution time in all 3 browsers vs the chromium only.
// And the results are different. Execution time is more in multi browser testing as compared to chromium only. This is because in multi browser testing, tests are executed in all 3 browsers (chromium, firefox and webkit) which takes more time.
// We have also compared execution time in chromium vs firefox vs webkit. Execution time is more in firefox and webkit as compared to chromium. And also few tests are failing in webkit as compared to chromium and firefox. This is because of the view port size.
// More workers, more CPU usage. But the execution time is less. So we have to decide whether we want to reduce execution time or reduce CPU usage. If we want to reduce execution time, we can increase the number of workers. 
// For CI we can keep the number of workers less to reduce CPU usage. For local execution we can keep the number of workers more to reduce execution time.
// In workflow file, we have to install only chromium browser to reduce the execution time. If we install all browsers, it will take more time. If we want to test in all browsers, we can install all browsers. 
// We have also scheduled the workflow to run every hour to check the execution time and results in chromium.
// To upload the report to GitHub Pages, we have to allow workflow permissions in the repository settings. We have to give write permission to the workflow to upload the report to GitHub Pages.
// 

import '../tests/RegressionTest/Hub.spec.js';
import '../tests/RegressionTest/baba.spec.js';
import '../tests/RegressionTest/QA.spec.js';

import '../tests/RegressionTest/A.spec.js';
import '../tests/RegressionTest/B.spec.js';
import '../tests/RegressionTest/C.spec.js';
import '../tests/RegressionTest/D.spec.js';
import '../tests/RegressionTest/E.spec.js';
import '../tests/RegressionTest/F.spec.js';
import '../tests/RegressionTest/G.spec.js';
// import '../tests/RegressionTest/H.spec.js';
