import React from 'react';
import resumePDF from '../assets/resume.pdf';

function ResumeBtn() {
  return (
    <div>
      <a 
        href={resumePDF}
        download="Arinze_Chinweuba_Resume.pdf"
        className="resume-button font-clash"
      >
        Résumé
        {/* Star 1 */}
        <div className="star-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: 'geometricPrecision',
              textRendering: 'geometricPrecision',
              imageRendering: 'optimizeQuality',
              fillRule: 'evenodd',
              clipRule: 'evenodd'
            }}
          >
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>

        {/* Repeat for star-2 through star-6 with the same style object */}
        <div className="star-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: 'geometricPrecision',
              textRendering: 'geometricPrecision',
              imageRendering: 'optimizeQuality',
              fillRule: 'evenodd',
              clipRule: 'evenodd'
            }}
          >
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>
        <div className="star-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: 'geometricPrecision',
              textRendering: 'geometricPrecision',
              imageRendering: 'optimizeQuality',
              fillRule: 'evenodd',
              clipRule: 'evenodd'
            }}
          >
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>
        <div className="star-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: 'geometricPrecision',
              textRendering: 'geometricPrecision',
              imageRendering: 'optimizeQuality',
              fillRule: 'evenodd',
              clipRule: 'evenodd'
            }}
          >
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>
        <div className="star-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: 'geometricPrecision',
              textRendering: 'geometricPrecision',
              imageRendering: 'optimizeQuality',
              fillRule: 'evenodd',
              clipRule: 'evenodd'
            }}
          >
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>
        <div className="star-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: 'geometricPrecision',
              textRendering: 'geometricPrecision',
              imageRendering: 'optimizeQuality',
              fillRule: 'evenodd',
              clipRule: 'evenodd'
            }}
          >
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>

        {/* Add star-3, star-4, star-5, star-6 the same way */}

      </a>
    </div>
  );
}

export default ResumeBtn;