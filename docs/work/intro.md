---
sidebar_position: 1
title: Work & experience
description: Cloud infrastructure, FedRAMP, site reliability, and automation. Sean Radel's engineering experience and research.
---

I'm a **Senior IT Systems Engineer at Palo Alto Networks**, working across cloud governance, site reliability, and security automation. I build and operate infrastructure in commercial AWS and FedRAMP High environments, with a focus on making systems more reliable and reducing manual work.

My background spans DevOps, cloud security, infrastructure engineering, and privacy research. More recently, I've been building AI tooling to help engineering teams handle support requests more effectively.

[Email me](mailto:sradel2024@gmail.com) · [LinkedIn](https://www.linkedin.com/in/sean-radel/) · [GitHub](https://github.com/seanradel2020)

## Experience

### Palo Alto Networks {#palo-alto-networks}

**Senior IT Systems Engineer · February 2026–present**

- Lead SRE for the Stacklet cloud governance platform across AWS GovCloud and commercial AWS, supporting several thousand cloud accounts. Own availability, upgrades, and incident response.
- Own FedRAMP continuous monitoring for the self-hosted platform, including ECS container vulnerability remediation, monthly POA&M tracking, and assessment evidence and auditor presentations.
- Build an AI support-triage bot using AWS Bedrock, Lambda, and Slack for an SRE team supporting 1,000+ GKE namespaces. It uses two years of support history and Confluence documentation to classify requests and ask follow-up questions.
- Designed a support taxonomy using 3,000 annotated historical examples to help route requests and report on recurring issues, ownership, and time to resolution.
- Operate the Kong API gateway on GKE, with deployments through ArgoCD and Harness and monitoring through Chronosphere and PagerDuty.
- Administer AWS GovCloud Organizations and enforce governance through Stacklet, Cloud Custodian, and custom automation.

### CyberArk {#cyberark}

**August 2023–February 2026 · A Palo Alto Networks company**

#### DevOps Engineer

**January 2025–February 2026**

- Led deployment of Stacklet's first FedRAMP High instance in AWS GovCloud, from compliance review and audit through monthly continuous monitoring and vulnerability remediation.
- Developed security and FinOps policies to remove unused resources and remediate cloud misconfigurations. The platform performs **60K+ security and 70K+ FinOps remediations monthly**, saving **over $115K per month**.
- Rebuilt an instance scheduler using Lambda, DynamoDB, EventBridge, and AWS Organizations tags to start and stop EC2, RDS, and Redshift resources across time zones.
- Automated GovCloud vulnerability reporting and remediation, supported account onboarding, and helped migrate cloud resources during the Palo Alto Networks acquisition.

#### Cloud & Infrastructure Engineer

**May–December 2024**

- Administered AWS, FedRAMP GovCloud, Azure, and VMware vSphere environments, alongside on-premises R&D and corporate infrastructure.
- Led vulnerability management compliance meetings and implemented automation to remove unused cloud resources, reducing cloud platform usage by 65%.
- Built Ansible playbooks for network switch backups and Linux security agent deployment, and used Terraform to deploy Splunk in a FedRAMP environment.

#### Cloud Security Engineering Intern

**August 2023–May 2024**

- Built role-based access controls for Grafana with Terraform and Pulumi in FedRAMP environments.
- Developed automated compliance controls in Python and TypeScript using AWS services, and maintained Jenkins CI/CD pipelines for test and production deployments.

### Earlier experience

- **General Dynamics Electric Boat · Systems Engineering Intern · June–July 2023.** Supported integration of Special Operations Forces and other payloads into Virginia-class submarines, and documented technical requirements.
- **Central Intelligence Agency · Cybersecurity Intern · May–August 2022.** Worked in the Office of Cyber Security on adversarial testing and validation of cyber defenses.

## Tools & technical focus

| Area | Technologies & practices |
| --- | --- |
| Cloud & platforms | AWS, GovCloud, Organizations, ECS, GCP, GKE, Docker |
| Infrastructure & automation | Terraform, Ansible, Jenkins, Cloud Custodian, Stacklet |
| AI & tooling | AWS Bedrock, Claude, Slack integrations, AI-assisted development |
| Systems & observability | Linux, Windows Server, Active Directory, VMware, Chronosphere, CloudWatch |
| Security & compliance | FedRAMP, POA&M, vulnerability management, FinOps, GDPR |
| Languages | Python, TypeScript, Bash, Groovy |

## Research & leadership

- **Privacy Engineering Regulatory Compliance Lab · Research Assistant · January 2023–present.** Privacy compliance research, literature review, data annotation, and co-authorship of a paper on LLMs and privacy in software development. [More about the lab](./research/PERC_Lab.md).
- **University of Maine Cybersecurity Team · September 2020–September 2022; President, 2021–2022.** Led meetings and cybersecurity labs, and captained the third-place team at the 2022 Northeast Collegiate Cyber Defense Competition.
- **SPICE Lab · Research Assistant · May 2021–May 2022.** Developed cloud infrastructure and containerized cybersecurity labs, deployed Wazuh and the ELK Stack, and automated maintenance with Ansible. [More about SPICE](./research/SPICE-Lab.md).

### Publication

**Evaluating Privacy Questions from Stack Overflow: Can ChatGPT Compete?** · IEEE, 2023 · Co-author

[Research overview](./research/ChatGPT-StackOverFlow.md) · [Read on IEEE](https://ieeexplore.ieee.org/document/10260753)

## Education & certification

- **B.S. in Computer Science**, University of Maine · May 2024
- **AWS Certified Cloud Practitioner** · December 2023
