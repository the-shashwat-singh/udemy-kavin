const VerificationText = () => {
  return (
    <div className="px-6 py-4">
      <div className="leading-relaxed font-udemy-sans text-sm font-thin" style={{ color: 'oklch(29.74% 0.0362 281.74deg)', fontWeight: '200', fontSize: '15px' }}>
        This certificate above verifies that{" "}
        <span className="font-thin" style={{ color: 'oklch(48.41% 0.2342 293.93deg)', fontWeight: '200' }}>Shashwat Singh</span>{" "}
        successfully completed the course{" "}
        <span className="font-thin" style={{ color: 'oklch(48.41% 0.2342 293.93deg)', fontWeight: '200' }}>
          Analog Electronics - Complete Course (35+ Hours)
        </span>{" "}
        on 28/09/25 as taught by{" "}
        <span className="font-thin" style={{ color: 'oklch(48.41% 0.2342 293.93deg)', fontWeight: '200' }}>J P</span> on Udemy. 
        The certificate indicates the entire course was completed as validated by 
        the student. The course duration represents the total video hours of the 
        course at time of most recent completion.
      </div>
    </div>
  );
};

export default VerificationText;