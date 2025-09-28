import { Card } from "@/components/ui/card";

const VerificationText = () => {
  return (
    <Card className="p-6 bg-background border border-border">
      <div className="text-udemy-gray-medium leading-relaxed">
        This certificate above verifies that{" "}
        <span className="text-udemy-purple font-medium">Shashwat Singh</span>{" "}
        successfully completed the course{" "}
        <span className="text-udemy-purple font-medium">
          Circuit Analysis - Complete Course (64+ Hours)
        </span>{" "}
        on 28/09/25 as taught by{" "}
        <span className="text-udemy-purple font-medium">J P</span> on Udemy. 
        The certificate indicates the entire course was completed as validated by 
        the student. The course duration represents the total video hours of the 
        course at time of most recent completion.
      </div>
    </Card>
  );
};

export default VerificationText;