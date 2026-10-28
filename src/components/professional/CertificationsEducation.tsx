import { FaAward, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCheck } from 'react-icons/fa'

export default function ProfessionalCertificationsEducation() {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            05. Certifications & Education
          </span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <FaAward className="text-amber-400" />
              <span>Industry Cloud Certifications</span>
            </h3>

            {/* AWS SAA-C03 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-2">
                    ASSOCIATE LEVEL
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    AWS Certified Solutions Architect – Associate
                  </h4>
                  <div className="text-xs font-mono text-zinc-400 mt-0.5">Exam Code: SAA-C03</div>
                </div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                Validates comprehensive technical knowledge in architecting secure, resilient, high-performing, and cost-optimized cloud architectures on AWS. Focuses on multi-tier application design, decoupling with SQS/SNS, and highly available PostgreSQL/RDS deployments.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <FaCheck className="text-[9px]" /> Compute (EC2, ECS)
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <FaCheck className="text-[9px]" /> Storage (S3, EFS)
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <FaCheck className="text-[9px]" /> Security (IAM, VPC)
                </span>
              </div>
            </div>

            {/* AWS CLF-C02 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-3">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-800 text-zinc-300 border border-zinc-700/50 mb-2">
                  FOUNDATIONAL
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  AWS Certified Cloud Practitioner
                </h4>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">Exam Code: CLF-C02</div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                Foundational verification of cloud fluency, security standards, shared responsibility model, billing and pricing models, and core AWS infrastructure services.
              </p>
            </div>
          </div>

          {/* Right Column: Academic Degrees */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <FaGraduationCap className="text-cyan-400" />
              <span>Academic Degrees</span>
            </h3>

            {/* MCA */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-3">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-2">
                  POSTGRADUATE DEGREE
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Master of Computer Applications (MCA)
                </h4>
                <div className="text-xs font-mono text-zinc-300 mt-0.5">
                  Bangalore City University
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-zinc-500" />
                  Completed: October 2021
                </span>
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-zinc-500" />
                  Bangalore, Karnataka
                </span>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                Advanced studies in distributed systems, advanced database engineering, object-oriented software engineering, algorithmic efficiency, and web architectures.
              </p>
            </div>

            {/* BCA */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-3">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-800 text-zinc-300 border border-zinc-700/50 mb-2">
                  UNDERGRADUATE DEGREE
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <div className="text-xs font-mono text-zinc-300 mt-0.5">
                  Rani Channamma University (RCU)
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-zinc-500" />
                  Completed: May 2019
                </span>
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-zinc-500" />
                  Karnataka, India
                </span>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                Foundations in computer science: data structures & algorithms, relational database management systems (RDBMS), operating systems, and computer networks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
